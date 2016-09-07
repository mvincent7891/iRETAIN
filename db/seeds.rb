# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

subject_1 = Subject.create!(title: "General Knowledge")
subject_2 = Subject.create!(title: "Music")

guest = User.create!(username: "guest", password: "password")
user_2 = User.create!(username: "james", password: "password")

default_deck = Deck.create!(title: "Default", author_id: 0, subject_id: subject_1.id)

Card.create!(author_id: guest.id, deck_id: default_deck.id, title: 'Your First Card: Click on Me!',
             body: 'Clicking on cards will reveal their body as well
                    as some basic options. Click on the magnifying glass
                    in the navigation bar to find more decks and cards.')

Deck.clone_deck(default_deck.id, guest.id)
equations = Deck.create!(title: "Famous Equations", author_id: guest.id, subject_id: subject_1.id)

deck = Deck.create!(title: "Major Scale Modes", author_id: guest.id, subject_id: subject_2.id)

Card.create!(author_id: guest.id, deck_id: deck.id, title: 'ionian', body: 'first mode of the major scale')
Card.create!(author_id: guest.id, deck_id: deck.id, title: 'dorian', body: '2nd mode of the major scale')
Card.create!(author_id: guest.id, deck_id: deck.id, title: 'phrygian', body: '3rd mode of the major scale')
Card.create!(author_id: guest.id, deck_id: deck.id, title: 'lydian', body: '4th mode of the major scale')
Card.create!(author_id: guest.id, deck_id: deck.id, title: 'mixolydian', body: '5th mode of the major scale')
Card.create!(author_id: guest.id, deck_id: deck.id, title: 'aolian', body: '6th mode of the major scale')
Card.create!(author_id: guest.id, deck_id: deck.id, title: 'locrian', body: '7th mode of the major scale')

intervals = Deck.create!(title: "Intervals", author_id: guest.id, subject_id: subject_2.id)
Card.create!(author_id: guest.id, deck_id: intervals.id, title: 'Minor 2nd',
body: 'Jaws theme')
Card.create!(author_id: guest.id, deck_id: intervals.id, title: 'Major 2nd',
body: 'Hap-py BIRTH-day...')
Card.create!(author_id: guest.id, deck_id: intervals.id, title: 'Minor 3rd',
body: 'Go to SLEEP...')
Card.create!(author_id: guest.id, deck_id: intervals.id, title: 'Major 3rd',
body: 'Oh WHEN the saints...')
Card.create!(author_id: guest.id, deck_id: intervals.id, title: 'Perfect 4th',
body: 'Oh when THE saints...')
Card.create!(author_id: guest.id, deck_id: intervals.id, title: 'Augmented 4th',
body: 'The SIMPsons...')
Card.create!(author_id: guest.id, deck_id: intervals.id, title: 'Perfect 5th',
body: 'Twinkle TWINKLE...')
Card.create!(author_id: guest.id, deck_id: intervals.id, title: 'Minor 6th',
body: 'Let\'s set the world on fi-RE (We Are Young - Fun)')
Card.create!(author_id: guest.id, deck_id: intervals.id, title: 'Major 6th',
body: 'DaSHING through the snow...')
Card.create!(author_id: guest.id, deck_id: intervals.id, title: 'Minor 7th',
body: 'Take ON me... (Take on Me - A-Ha)')
Card.create!(author_id: guest.id, deck_id: intervals.id, title: 'Major 7th',
body: 'Somewhere O-ver the rainbow...')
Card.create!(author_id: guest.id, deck_id: intervals.id, title: 'Perfect Octave',
body: 'SomeWHERE over the rainbow...')

deck_2 = Deck.create!(title: "Fun Facts", author_id: user_2.id, subject_id: subject_1.id)

Card.create!(author_id: user_2.id, deck_id: deck_2.id, title: 'tree-sonous', body: 'It is illegal to climb trees in Oshawa, a town in Ontario, Canada.')
Card.create!(author_id: user_2.id, deck_id: deck_2.id, title: 'eye wish', body: 'Brown eyes are blue underneath, and you can actually get a surgery to turn brown eyes blue.')
Card.create!(author_id: user_2.id, deck_id: deck_2.id, title: 'gut-shy', body: 'When you blush, the lining of your stomach also turns red.')
Card.create!(author_id: user_2.id, deck_id: deck_2.id, title: 'seed data', body: 'Coffee beans aren’t beans; they are seeds of coffee berries.')

deck_3 = Deck.create!(title: "Seed Data", author_id: guest.id, subject_id: subject_1.id)
deck_4 = Deck.create!(title: "Big Words", author_id: guest.id, subject_id: subject_1.id)
deck_5 = Deck.create!(title: "Computer Science", author_id: user_2.id, subject_id: subject_1.id)
deck_7 = Deck.create!(title: "Science", author_id: guest.id, subject_id: subject_1.id)

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

medicine = Subject.create!(title: "Medicine")
pharma = Deck.create!(title: "Pharmacology", author_id: guest.id, subject_id: medicine.id)
Card.create!(author_id: guest.id, deck_id: pharma.id, title: 'pharmacon',
  body: 'Anothe word for \'drug\'; biologically active substance.')
Card.create!(author_id: guest.id, deck_id: pharma.id, title: 'bioactive',
  body: 'having beneficial or adverse effects on living matter')
Card.create!(author_id: guest.id, deck_id: pharma.id, title: 'endogenous',
  body: 'substances and processes originating from within an organism, tissue, or cell')
Card.create!(author_id: guest.id, deck_id: pharma.id, title: 'exogenous',
  body: 'substances and processes originating externally (outside a system)')

gastro = Deck.create!(title: "Gastroenterology", author_id: guest.id, subject_id: medicine.id)
Card.create!(author_id: guest.id, deck_id: gastro.id, title: 'duodenum',
  body: 'The first portion of the small intestines, approximately 25 cm in length; responsible primarily for breaking down food.')
Card.create!(author_id: guest.id, deck_id: gastro.id, title: 'jejunum',
  body: 'The second portion of the small intestines, approximately 2 m in length.')
Card.create!(author_id: guest.id, deck_id: gastro.id, title: 'ileum',
  body: 'The last portion of the small intestines.')

Card.create!(author_id: guest.id, deck_id: equations.id, title: 'Fundamental Theorem of Calculus',
  body: 'Allows the calculation of an instantaneous rate of change.')
Card.create!(author_id: guest.id, deck_id: equations.id, title: 'Newton\'s Universal Law of Gravitation',
  body: 'Calculates the force of gravity between two objects.')
Card.create!(author_id: guest.id, deck_id: equations.id, title: 'Euler\'s Formula for Polyhedra',
  body: 'Describes a space\'s shape or structure regardless of alignment')
Card.create!(author_id: guest.id, deck_id: equations.id, title: 'The Wave Equation',
  body: 'A differential equation describing the behavior of waves, originally the behavior of a vibrating violin string.')
Card.create!(author_id: guest.id, deck_id: equations.id, title: 'Shannon-Nyquist Theorem',
  body: 'A fundamental bridge between continuous- and discrete-time signals establishing a sufficient condition for a sample rate that permits
        a discrete sequence of samples to capture all the information from a continuous-time signal of finite bandwidth')
Card.create!(author_id: guest.id, deck_id: equations.id, title: 'Fourier Transform',
  body: 'Describes patterns in time as a function of frequency')
Card.create!(author_id: guest.id, deck_id: equations.id, title: 'Maxwell\'s First Equation: Gauss\'s Law',
  body: 'Describes the variation of electric fields due to electric charge sources')
Card.create!(author_id: guest.id, deck_id: equations.id, title: 'Maxwell\'s Second Equation: Gauss\'s Law for Magnetism',
  body: 'Describes the variation of magnetic fields not due to magnetic monopoles')
Card.create!(author_id: guest.id, deck_id: equations.id, title: 'Maxwell\'s Third Equation: Maxwell-Faraday Equation',
  body: 'Describes how electric fields circulate around time-varying magnetic fields')
Card.create!(author_id: guest.id, deck_id: equations.id, title: 'Maxwell\'s Fourth Equation: Ampere\'s Law',
  body: 'Describes how magnetic fields circulate around electric current and time-varying electric fields')

engineering = Subject.create!(title: "Engineering")
electric = Deck.create!(title: "Laws of Electricity", author_id: guest.id, subject_id: engineering.id)
fluid = Deck.create!(title: "Fluid Dynamics", author_id: guest.id, subject_id: engineering.id)
algo = Deck.create!(title: "Algorithms", author_id: guest.id, subject_id: engineering.id)
