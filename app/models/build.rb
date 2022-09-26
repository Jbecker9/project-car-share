class Build < ApplicationRecord
    belongs_to :make, optional: true
    belongs_to :user
    accepts_nested_attributes_for :make
end
