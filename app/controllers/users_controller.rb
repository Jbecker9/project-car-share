class UsersController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:create, :show, :show_user_builds]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        user = User.find_by!(id: session[:user_id])
        user.makes.joins(:builds).where(build: {user_id: session[:user_id]})
        # byebug
        render json: user
    end

    def destroy
        user = User.find_by!(id: params.permit(:user_id))
        user.builds.destroy
        user.destroy
        session.delete :user_id
    end

    def show_user_builds
        user = User.find_by!(id: session[:user_id])
        user_makes = user.builds
        render json: user_makes
    end

private

    def user_params
        params.permit(:username, :password, :password_confirmation, :image_url)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response(error)
        render json: { errors: error }, status: :not_found
    end

    def user_only_builds
        self.builds.select {|build| build.id == session[:user_id]}
    end

    def authorize
        return render json: { error: "Not Authorized" }, status: :unauthorized unless session[:user_id] == params[:user_id]
    end
end
