class Card < ActiveRecord::Base
  validates :title, :body, :deck_id, presence: true

end
