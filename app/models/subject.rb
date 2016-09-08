class Subject < ActiveRecord::Base
  has_many :decks, dependent: :destroy
end
