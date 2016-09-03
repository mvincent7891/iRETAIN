class AddUniqueIndexToDecks < ActiveRecord::Migration
  def change
    add_index :decks, [:author_id, :title], unique: true
  end
end
