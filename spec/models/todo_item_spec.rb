require 'rails_helper'

RSpec.describe TodoItem, type: :model do
  describe "should be valid when" do
    it "valid attributes is given" do
      item1 = TodoItem.new(
                          title: 'Test title',
                          description: 'Test description'
                          )
      expect(item1).to be_valid
    end

    it "only title is given" do
      item2 = TodoItem.new(
                          title: 'Test title'
                          )
      expect(item2).to be_valid
    end
  end

  describe "should not be valid when" do
    it "empty attibutes is given" do
      item3 = TodoItem.new

      expect(item3).to_not be_valid
    end

    it "unvalid attibutes is given" do
      item4 = TodoItem.new(description: 'Test description')

      expect(item4).to_not be_valid
    end
  end
end
