class Tag < ActiveRecord::Base

  has_many :taggings
  has_many :decks,
    through: :taggings


  def self.extractTags(deck_id, tag_array)
    if tag_array.nil?
      return []
    end
    tags = [];
    tag_array.each { |tag_name| tags << Tag.find_or_create_by!(name: tag_name.downcase) }
    taggings = [];
    tags.each { |tag| taggings << Tagging.find_or_create_by!( deck_id: deck_id.to_i,
                                                              tag_id: tag.id )}
    ids = tags.map(&:id)
  end

  def self.newDeckTags(tag_array)
    if tag_array.nil?
      return []
    end
    tags = [];
    tag_array.each { |tag_name| tags << Tag.find_or_create_by!(name: tag_name.downcase) }
    ids = tags.map(&:id)
  end
end
