class BuildSerializer < ActiveModel::Serializer
  attributes :id, :build_image, :budget, :model, :year, :spec, :engine
  belongs_to :make
  belongs_to :user
end
