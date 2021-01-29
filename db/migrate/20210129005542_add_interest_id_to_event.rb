class AddInterestIdToEvent < ActiveRecord::Migration[6.1]
  def change
    add_reference :events, :interest, null: false, foreign_key: true
  end
end
