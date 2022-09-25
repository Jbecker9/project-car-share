class BuildsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        user = find_user
        make = Make.find_by!(id: params[:make_id])
        builds = make.builds
        render json: builds
    end

    def create
        user = find_user
        if params[:make_id]
            unless user.makes.find_by(id: params[:make_id])
                added_make = Make.find_by(params[:make_id])
                user.makes << added_make
                user.makes.order(:id)
            else
            end
            make = user.makes.find_by(id: params[:make_id])
            new_build = make.builds.create!(build_params)
            render json: new_build, status: :created
        else
            new_build = user.builds.create!(build_params)
            render json: new_build, status: :created
        end
    end

    def update
        user = find_user
        make = find_user_make_error
        update_build = find_build
        update_build.update!(build_params)
        render json: update_build
    end

    def destroy
        user = find_user
        make = find_user_make_error
        deleted_build = find_build
        deleted_build.destroy
        render json: deleted_build
    end
        
private

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def find_user_make_error
        user = find_user
        user.makes.find_by!(id: params[:make_id])
    end

    def find_user_make_no_error
        user.makes.find_by(id: params[:make_id])
    end

    def find_build
        make.builds.find_by!(id: params[:id])
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
