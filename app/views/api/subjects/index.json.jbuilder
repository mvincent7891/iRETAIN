# json.array! @subjects, :id, :title

json.array!(@subjects) do |subject|
  json.id subject.id
  json.title subject.title
  json.deckCount @subject_hash[subject.id]
end
