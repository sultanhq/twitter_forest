require 'rails_helper'

xfeature 'displaying a number of tweets' do
  scenario 'the number of tweets containing a certain keyword is visible on the screen' do
    visit '/tweets'

  end
end
