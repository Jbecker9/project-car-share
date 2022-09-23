class MakeSerializer < ActiveModel::Serializer
  attributes :id, :company_name, :company_image, :builds
  has_many :users, through: :builds
end
