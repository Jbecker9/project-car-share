class BuildSerializer < ActiveModel::Serializer
  attributes :id, :build_image, :budget, :model, :year, :spec, :engine, :make
  belongs_to :make
  belongs_to :user
  has_many :parts
end
