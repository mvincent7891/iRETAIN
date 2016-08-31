class CreateDecks < ActiveRecord::Migration
  def change
    create_table :decks do |t|
      t.integer :author_id, null: false
      t.integer :subject_id, null: false
      t.string :title, null: false
      t.timestamps null: false
    end
  end
end
