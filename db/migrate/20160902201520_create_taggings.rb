class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :deck_id, null: false
      t.integer :tag_id, null: false
      t.timestamps null: false
    end
  end
end
