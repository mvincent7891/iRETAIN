json.extract! deck, :id, :title, :author_id, :subject_id
json.username User.find(deck.author_id).username
json.tags deck.tags.map { |tag| {id: tag.id, text: tag.name} }
