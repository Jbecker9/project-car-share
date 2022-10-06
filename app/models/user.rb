class User < ApplicationRecord
    has_many :builds
    has_many :makes, -> { distinct }, through: :builds
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
