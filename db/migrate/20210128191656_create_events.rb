class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.text :description
      t.string :date
      t.string :img_url

      t.timestamps
    end
  end
end
