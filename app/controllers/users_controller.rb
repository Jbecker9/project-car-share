class UsersController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:create, :show]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        user = User.find_by!(id: session[:user_id])
        render json: user, include: :makes 
    end

    def destroy
        user = User.find_by!(id: params.permit(:user_id))
        user.builds.destroy
        user.destroy
        session.delete :user_id
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

    def authorize
        return render json: { error: "Not Authorized" }, status: :unauthorized unless session[:user_id] == params[:user_id]
    end
end
