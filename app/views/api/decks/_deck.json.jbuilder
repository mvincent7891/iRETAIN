json.extract! deck, :id, :title, :author_id, :subject_id

json.tags deck.tags.map { |tag| {id: tag.id, text: tag.name} }
