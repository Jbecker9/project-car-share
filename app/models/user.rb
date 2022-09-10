class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    has_many :builds
    has_many :makes, -> { distinct }, through: :builds
end
