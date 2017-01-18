require 'rails_helper'

feature 'forest' do
  context 'Main view' do
    scenario 'User can see the welcome page' do
      visit '/forest'
      expect(page).to have_content('Twitter Forest')
    end
  end

  context 'viewing tweet count' do
    scenario 'user can see the count of tweets' do
      # @tweet = double("tweet", count: 17)
      visit '/forest'
      # require'pry';binding.pry
      expect(page).to have_content('17 Tweets')
    end
  end


  xcontext 'customise forest' do
    scenario 'User can pick from a list the type of forest' do
      visit '/'
      click_link 'Customise Forest'
      within 'div#choice' do
        find('select.category_choice').select('Trump')
      end
      click_button 'Generate Forest'
      within 'div.navbar-brand' do
        expect(page).to have_content('Trump')
      end
    end
  end
end
