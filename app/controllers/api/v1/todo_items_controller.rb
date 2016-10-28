class Api::V1::TodoItemsController < Api::V1::BaseController

  # GET api/v1/todo_items.json
  def index
    respond_with TodoItem.all
  end
end