require 'rails_helper'

feature 'displaying a number of tweets' do
  scenario 'the number of tweets containing a certain keyword is visible on the screen' do
    visit '/tweets'
    expect(page).have_content 'Tweets'
  end
end
