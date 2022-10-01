class Make < ApplicationRecord
    has_many :builds
    has_many :users, through: :builds
    accepts_nested_attributes_for :builds
    validates :company_name, uniqueness: true
end
