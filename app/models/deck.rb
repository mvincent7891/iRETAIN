class Deck < ActiveRecord::Base
  validates :author_id, :title, :subject_id, presence: true
  validates :title, uniqueness: { scope: :author_id }

  belongs_to :subject
  has_many :cards, dependent: :destroy
  has_many :taggings, dependent: :destroy
  has_many :tags,
    through: :taggings

  def self.create_default_decks(user_id)
    default_deck = Deck.where(title: "Default").first
    seed_deck = Deck.where(title: "Seed Data").first
    equation_deck = Deck.where(title: "Famous Equations").first
    modes_deck = Deck.where(title: "Major Scale Modes").first
    intervals_deck = Deck.where(title: "Intervals").first
    self.clone_deck(default_deck.id, user_id)
    self.clone_deck(seed_deck.id, user_id)
    self.clone_deck(modes_deck.id, user_id)
    self.clone_deck(intervals_deck.id, user_id)
    self.clone_deck(equation_deck.id, user_id)
  end

  def self.clone_deck(deck_id, user_id)
    old_deck = Deck.find(deck_id)
    old_subject = old_deck.subject_id
    old_title = old_deck.title
    new_deck = Deck.create!(author_id: user_id,
                            title: old_title,
                            subject_id: old_subject)

    old_deck.cards.each do |card|
      card_title = card.title
      card_body = card.body
      Card.create!(author_id: user_id,
                   deck_id: new_deck.id,
                   title: card_title,
                   body: card_body)
    end
    new_deck.tag_ids = old_deck.tag_ids
  end

  def self.subjects(deck_ids)
    all_subject_ids = [];
    deck_ids.each { |id| all_subject_ids << Deck.find(id).subject_id }
    subjects = {}
    all_subject_ids.uniq.each { |id| subjects[id] = all_subject_ids.count(id) }
    subjects
  end
end
