class CreateTwitterClients < ActiveRecord::Migration[5.0]
  def change
    create_table :twitter_clients do |t|

      t.timestamps
    end
  end
end
