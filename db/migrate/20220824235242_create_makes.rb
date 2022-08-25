class CreateMakes < ActiveRecord::Migration[6.1]
  def change
    create_table :makes do |t|
      t.string :company_name
      t.string :company_image

      t.timestamps
    end
  end
end
