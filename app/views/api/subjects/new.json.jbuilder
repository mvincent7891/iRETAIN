
json.subject do
  json.set! @subject.id do
    json.partial! 'subject', subject: @subject
    json.deckCount 1
  end
end

json.deck do
  json.set! @deck.id do
    json.partial! '/api/decks/deck', deck: @deck
  end
end
