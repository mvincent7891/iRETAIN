class Deck < ActiveRecord::Base
  validates :author_id, :title, :subject_id, presence: true

  has_many :taggings
  has_many :tags,
    through: :taggings

  def self.create_default_deck(user_id)
    default_subject = Subject.where(title: "General Knowledge").first
    default_deck = Deck.create!(title: "Default", author_id: user_id, subject_id: default_subject.id)
    Card.create!(author_id: user_id, deck_id: default_deck.id, title: 'Your First Card: Click on Me!', body: 'Clicking on cards will reveal their body as well as some basic options. Click on the magnifying glass in the search bar to find more decks and cards.')
  end

end
