class Api::V1::TodoItemsController < Api::V1::BaseController
  def index
    items = TodoItem.all

    respond_with items
  end
end