class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :makes
  has_many :makes, through: :builds
end
