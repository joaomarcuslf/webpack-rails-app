class Api::V1::ItemsController < Api::V1::BaseController
  def index
    respond_with TodoItem.all
  end
end