

@subjects.each do |subject|
  json.set! subject.id do
    json.partial! 'subject', subject: subject
    json.deckCount @subject_hash[subject.id]
  end
end
