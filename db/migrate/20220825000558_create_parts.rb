class CreateParts < ActiveRecord::Migration[6.1]
  def change
    create_table :parts do |t|
      t.string :name
      t.integer :build_id
      t.string :part_image
      t.string :comment

      t.timestamps
    end
  end
end
