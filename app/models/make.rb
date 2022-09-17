class Make < ApplicationRecord
    has_many :builds
    has_many :users, through: :builds
    validates :company_name, uniqueness: true
end
