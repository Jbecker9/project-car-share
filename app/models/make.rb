class Make < ApplicationRecord
    has_many :builds
    has_many :users, -> { distinct }, through: :builds
    validates :company_name, uniqueness: true
end
