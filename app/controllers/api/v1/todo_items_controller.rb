class Api::V1::TodoItemsController < Api::V1::BaseController

  # GET api/v1/todo_items.json
  def index
    respond_with TodoItem.all
  end

  # POST api/v1/todo_items.json
  def create
    respond_with :api, :v1, TodoItem.create(item_params)
  end

  private
    def item_params
      params.require(:todo_item).permit(:id, :title, :description)
    end
end