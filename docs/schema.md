# Schema Information

## users
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
username           | string    | not null, indexed, unique
email              | string    | indexed, unique
first_name         | string    |
last_name          | string    |
password_digest    | string    | not null
session_token      | string    | not null, indexed, unique
num_quiz_questions | integer   | not null, default: 5
quiz_question_time | integer   | not null, default: 5
default_deck_id    | integer   | not null, default: (first deck created)

## decks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed
subject_id  | integer   | not null, foreign key (references subjects), indexed
highlight   | boolean   | not null, default: false
public      | boolean   | not null, default: false

## subjects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
highlight   | boolean   | not null, default: false
public      | boolean   | not null, default: false

## cards
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
author_id         | integer   | not null, foreign key (references users), indexed
deck_id           | integer   | not null, foreign key (references decks), indexed
title             | string    | not null
body              | string    | not null
reviews           | integer   | not null, default: 0
correct_responses | integer   | not null, default: 0

## quizzes
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references users), indexed
score         | integer   | not null
time          | float     | not null
questions     | integer   | not null
correct       | integer   | not null
subject_id    | integer   | (if null, quiz was on all topics)

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
deck_id     | integer   | not null, foreign key (references decks), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
