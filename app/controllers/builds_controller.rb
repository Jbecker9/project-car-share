class BuildsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:fastest, :budget]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        user = find_user
        new_build = user.builds.create!(build_params)
        render json: user, status: :created
    end

    def update
        user = find_user
        build = user.builds.find_by!(id: params[:id])
        build.update!(build_params)
        render json: user, status: :accepted
    end

    def destroy
        user = find_user
        build = user.builds.find_by!(id: params[:id])
        build.destroy
        render json: user
    end

    def fastest
        builds = Build.all
        fastest_builds = builds.order(horsepower: :desc)
        render json: fastest_builds
    end

    def budget
        builds = Build.all
        builds_by_budget = builds.order(budget: :desc)
        render json: builds_by_budget
    end
        
private

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def build_params
        params.permit(:build_image, :budget, :make_id, :model, :year, :spec, :engine, :horsepower, :id, make_attributes: [:company_name, :company_image])
    end

    def render_not_found_response(invalid)
        render json: { errors: invalid }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid }, status: :unprocessable_entity
    end

    def authorize
        return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? (:user_id)
    end
end
