class Deck < ActiveRecord::Base
  validates :author_id, :title, :subject_id, presence: true
  
end
