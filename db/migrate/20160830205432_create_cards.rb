class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.integer :author_id, null: false
      t.integer :deck_id, null: false
      t.string :title, null: false
      t.string :body, null: false
      t.timestamps null: false
    end
  end
end
