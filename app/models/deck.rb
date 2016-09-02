class Deck < ActiveRecord::Base
  validates :author_id, :title, :subject_id, presence: true

  has_many :taggings
  has_many :tags,
    through: :taggings
end
