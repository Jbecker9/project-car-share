class Make < ApplicationRecord
    has_many :users, through: :build
    has_many :builds
end
