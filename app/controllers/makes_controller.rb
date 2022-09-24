class MakesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        makes = Make.all
        render json: makes
    end

    def show
        user = find_user
        makes = Make.all
        new_makes = makes.reject { |make| make.id == user.makes.each { |user_make| user_make.id }}
        byebug
        render json: new_makes 
    end

    def create
        user = find_user
        new_make = user.makes.create!(make_params)
        render json: new_make
    end

    def destroy
        make = Make.find_by!(id: params[:id])
        make.destroy
    end

private

    def make_params
        params.permit(:company_name, :company_image, builds_attributes: [:build_image, :budget, :model, :year, :spec, :engine, :horsepower, :id, :user_id])
    end

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def render_not_found_response(invalid)
        render json: { errors: invalid }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid }, status: :unprocessable_entity
    end
end
