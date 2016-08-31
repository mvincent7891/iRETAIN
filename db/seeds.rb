# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!(username: "guest", password: "password")

deck = Deck.create!(title: "Major Scale Modes", author_id: guest.id, subject_id: 1)

Card.create!(author_id: 1, deck_id: deck.id, title: 'ionian', body: 'first mode of the major scale')
Card.create!(author_id: 1, deck_id: deck.id, title: 'dorian', body: '2nd mode of the major scale')
Card.create!(author_id: 1, deck_id: deck.id, title: 'phrygian', body: '3rd mode of the major scale')
Card.create!(author_id: 1, deck_id: deck.id, title: 'lydian', body: '4th mode of the major scale')
Card.create!(author_id: 1, deck_id: deck.id, title: 'mixolydian', body: '5th mode of the major scale')
Card.create!(author_id: 1, deck_id: deck.id, title: 'aolian', body: '6th mode of the major scale')
Card.create!(author_id: 1, deck_id: deck.id, title: 'locrian', body: '7th mode of the major scale')
