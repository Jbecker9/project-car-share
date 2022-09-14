class Make < ApplicationRecord
    has_many :builds, dependent: :destroy
    has_many :users, through: :builds
    validates :company_name, uniqueness: true
end
