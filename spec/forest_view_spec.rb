require 'rails_helper'

feature 'forest' do
  context 'Main view' do
    scenario 'User can see the welcome page' do
      visit '/forest'
      expect(page).to have_content('Twitter Forest')
    end
  end
end
