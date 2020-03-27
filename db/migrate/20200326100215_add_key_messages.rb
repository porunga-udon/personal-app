class AddKeyMessages < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :key, :integer
  end
end
