json.array! @tags do |tag|
  json.id tag.id
  json.text tag.name
end

# => [ { "id": 1, "name": "general" }, ... ]
