class CreateBuilds < ActiveRecord::Migration[6.1]
  def change
    create_table :builds do |t|
      t.string :name
      t.integer :budget
      t.integer :make_id
      t.string :model
      t.integer :year
      t.string :spec
      t.string :engine
      t.string :user_id
      t.integer :horsepower

      t.timestamps
    end
  end
end
