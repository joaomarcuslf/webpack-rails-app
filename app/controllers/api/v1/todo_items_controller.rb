class Api::V1::TodoItemsController < Api::V1::BaseController
  def index
    respond_with TodoItem.all
  end
end