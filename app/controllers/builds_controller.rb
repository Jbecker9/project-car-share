class BuildsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        builds = Build.all
        render json: builds
    end

    def create
        user = find_user
        new_build = user.builds.create?(build_params)
        render json: new_build, status: :created
    end
        
private

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def build_params
        params.permit(:name, :budget, :make_id, :model, :year, :spec, :engine)
    end

    def render_not_found_response(invalid)
        render json: { errors: invalid }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid }, status: :unprocessable_entity
    end
end
