class MakesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        makes = Make.all
        render json: makes, include: ['builds', 'builds.user']
    end

    def featured
        makes = Make.all
        make = makes.sample
        render json: make, include: ['builds', 'builds.user']
    end

    def popular
        makes = Make.all
        popular_makes = makes.sort_by { |make| make.builds.length }.reverse
        render json: popular_makes.take(5), include: ['builds', 'builds.user']
    end

    #show all of the makes with first letter == "a"
    def match
        makes = Make.all
        # each make, reject every make != "a"
        makes_name = makes.pluck(:company_name)
        a_makes = makes_name.select { |name| name.include?("a") }
        render json: a_makes
    end

private

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
