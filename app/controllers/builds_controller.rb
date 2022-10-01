class BuildsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        user = find_user
        make = user.makes.find_by!(id: params[:make_id])
        builds = make.builds
        render json: builds
    end

    def create
        user = find_user
        new_build = user.builds.create!(build_params)
        render json: user, status: :created
    end

    def update
        user = find_user
        make = user.makes.find_by!(id: params[:make_id])
        build = make.builds.find_by!(id: params[:id])
        build.update!(build_params)
        render json: user, status: :accepted
    end

    def destroy
        user = find_user
        make = user.makes.find_by!(id: params[:make_id])
        deleted_build = make.builds.find_by!(id: params[:id])
        deleted_build.destroy
        render json: user
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
end
