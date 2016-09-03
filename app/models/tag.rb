class Tag < ActiveRecord::Base

  has_many :taggings
  has_many :decks,
    through: :taggings

  def self.use_queries(queries)
    # queries => ['fun', 'music', 'general']
    # Tag.use_queries(queries) =>
    # Tag.where("name LIKE ? or name LIKE ? or name LIKE ?", "%#{'fun'}%", "%#{'music'}%", "%#{'general'}%")
    query_array = []
    parameter_array = []
    queries.each do |query|
      query_array << "name LIKE ?"
      parameter_array << "%#{query}%"
    end
    query_string = query_array.join(" or ")
    Tag.where(query_string, *parameter_array)
  end

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
