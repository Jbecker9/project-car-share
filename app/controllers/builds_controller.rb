class BuildsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        builds = Build.all
        render json: builds, include: :make
    end

    def create
        # byebug
        make = find_make
        new_build = make.builds.create!(build_params)
        render json: new_build, status: :created
    end

    def update
        update_build = find_build
        update_build.update!(build_params)
        render json: update_build
    end

    def destroy
        # byebug
        deleted_build = find_build
        deleted_build.destroy
        render json: deleted_build
    end
        
private

    def find_user
        # byebug?
        User.find_by!(id: session[:user_id])
    end

    def find_make
        user = find_user
        user.makes.find_by!(id: params[:make_id])
    end

    def find_build
        make = find_make
        make.builds.find_by!(id: params[:id])
    end

    def build_params
        params.permit(:build_image, :budget, :make_id, :model, :year, :spec, :engine, :horsepower, :id, :build )
    end

    def render_not_found_response(invalid)
        render json: { errors: invalid }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid }, status: :unprocessable_entity
    end
end
