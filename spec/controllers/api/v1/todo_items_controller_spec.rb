require 'rails_helper'

RSpec.describe Api::V1::TodoItemsController, type: :controller do
  describe "GET index" do
    it "should display an array" do
      FactoryGirl.create_list(:todo_item, 10)

      get '/api/v1/items'

      json = JSON.parse(response.body)

      expect(response).to be_success

      # expect(json['messages'].length).to eq(10)
    end
  end
end
