require 'rails_helper'

RSpec.describe Tweet, type: :model do
  describe '#tweet_count' do
    it { is_expected.to respond_to(:tweet_count) }
  end
end
