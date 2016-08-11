class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :user
      t.string :current_location
      t.string :destination
      t.integer :people

      t.timestamps
    end
  end
end
