class MakesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        makes = Make.all
        render json: makes
    end

    def show
        user = find_user
        all_makes = Make.all
        user_makes_id = user.makes.map { |make| make[:id] }
        non_user_makes = all_makes.reject { |make| user_makes_id.include?(make[:id]) }
        render json: non_user_makes
    end

    def create
        user = find_user
        new_make = user.makes.create!(make_params_with_build)
        render json: new_make
    end

    def destroy
        make = Make.find_by!(id: params[:id])
        make.destroy
    end

    def sample
        makes = Make.all
        make = makes.sample
        render json: make
    end

private

    def make_params_with_build
        params.permit(:company_name, :company_image, builds_attributes: [:build_image, :budget, :model, :year, :spec, :engine, :horsepower])
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
