class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :builds
  has_many :builds
  has_many :makes
end
