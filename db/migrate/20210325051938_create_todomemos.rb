class CreateTodomemos < ActiveRecord::Migration[6.0]
  def change
    create_table :todomemos do |t|
      t.string :name,           null: false
      t.boolean :is_completed,  default: false, null: false
      t.timestamps
    end
  end
end