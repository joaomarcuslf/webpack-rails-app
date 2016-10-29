class Api::V1::TodoItemsController < Api::V1::BaseController

  # GET api/v1/todo_items.json
  def index
    respond_with TodoItem.all
  end

  # POST api/v1/todo_items.json
  def create
    respond_with :api, :v1, TodoItem.create(item_params)
  end

  # DELETE api/v1/todo_items.json
  def destroy
    respond_with TodoItem.destroy(params[:id])
  end

  # UPDATE api/v1/todo_items.json
  def update
    item = TodoItem.find(params[:id])
    item.update_attributes(item_params)
    respond_with item, json: item
  end

  private
    def item_params
      params.require(:todo_item).permit(:id, :title, :description)
    end
end
