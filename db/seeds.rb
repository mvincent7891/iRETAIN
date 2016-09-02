# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!(username: "guest", password: "password")

deck = Deck.create!(title: "Major Scale Modes", author_id: guest.id, subject_id: 1)

Card.create!(author_id: guest.id, deck_id: deck.id, title: 'ionian', body: 'first mode of the major scale')
Card.create!(author_id: guest.id, deck_id: deck.id, title: 'dorian', body: '2nd mode of the major scale')
Card.create!(author_id: guest.id, deck_id: deck.id, title: 'phrygian', body: '3rd mode of the major scale')
Card.create!(author_id: guest.id, deck_id: deck.id, title: 'lydian', body: '4th mode of the major scale')
Card.create!(author_id: guest.id, deck_id: deck.id, title: 'mixolydian', body: '5th mode of the major scale')
Card.create!(author_id: guest.id, deck_id: deck.id, title: 'aolian', body: '6th mode of the major scale')
Card.create!(author_id: guest.id, deck_id: deck.id, title: 'locrian', body: '7th mode of the major scale')


deck_2 = Deck.create!(title: "Fun Facts", author_id: guest.id, subject_id: 2)

Card.create!(author_id: guest.id, deck_id: deck_2.id, title: 'tree-sonous', body: 'It is illegal to climb trees in Oshawa, a town in Ontario, Canada.')
Card.create!(author_id: guest.id, deck_id: deck_2.id, title: 'eye wish', body: 'Brown eyes are blue underneath, and you can actually get a surgery to turn brown eyes blue.')
Card.create!(author_id: guest.id, deck_id: deck_2.id, title: 'gut-shy', body: 'When you blush, the lining of your stomach also turns red.')
Card.create!(author_id: guest.id, deck_id: deck_2.id, title: 'seed data', body: 'Coffee beans aren’t beans; they are seeds of coffee berries.')

deck_3 = Deck.create!(title: "Seed Data", author_id: guest.id, subject_id: 2)
deck_4 = Deck.create!(title: "Big Words", author_id: guest.id, subject_id: 2)
deck_5 = Deck.create!(title: "Computer Science", author_id: guest.id, subject_id: 2)
deck_6 = Deck.create!(title: "Politics", author_id: guest.id, subject_id: 2)
deck_7 = Deck.create!(title: "Science", author_id: guest.id, subject_id: 2)

Card.create!(author_id: guest.id, deck_id: deck_3.id, title: 'Production', body: 'Seeds are produced when pollen is released from the male (stamen) part of a plant')
Card.create!(author_id: guest.id, deck_id: deck_3.id, title: 'Seed plants', body: 'There are two types of plants that produce seeds: gymnosperms (like the conifer family), whose seeds are exposed, and angiosperms, or flowering plants, whose seeds are protected by fruits')
Card.create!(author_id: guest.id, deck_id: deck_3.id, title: 'The Holy See(d)', body: 'The oldest viable seed to have grown into a plant was a date palm seed estimated to be 2,000 years old (making it the only surviving contemporary of Jesus)')
Card.create!(author_id: guest.id, deck_id: deck_3.id, title: 'Big ol\' seed', body: 'The biggest seed belongs to the coco de mer palm (Lodoicea maldivica). Their fruit usually contain just one seed, which can weigh almost three stone, but no one knows what a stone is.')


t1 = Tag.create!(name: "music")
t2 = Tag.create!(name: "plants")
t3 = Tag.create!(name: "general")

tag1 = Tagging.create!(tag_id: t1.id, deck_id: deck.id)
tag2 = Tagging.create!(tag_id: t2.id, deck_id: deck_3.id)
tag3 = Tagging.create!(tag_id: t3.id, deck_id: deck.id)
tag3 = Tagging.create!(tag_id: t3.id, deck_id: deck_3.id)
tag3 = Tagging.create!(tag_id: t3.id, deck_id: deck_4.id)
tag3 = Tagging.create!(tag_id: t3.id, deck_id: deck_5.id)
