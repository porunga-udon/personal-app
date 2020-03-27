class AddCodeToMessages < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :code, :integer
  end
end
