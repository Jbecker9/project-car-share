class MakesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        makes = Make.all
        render json: makes
    end

    def create
        user = User.find_by!(id: session[:user_id])
        new_make = user.makes.create!(make_params)
        render json: new_make
    end

    def destroy
        make = Make.find_by!(id: params[:id])
        make.destroy
    end

private

    def make_params
        params.permit(:company_name, :company_image)
    end

    def render_not_found_response(invalid)
        render json: { errors: invalid }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid }, status: :unprocessable_entity
    end
end
