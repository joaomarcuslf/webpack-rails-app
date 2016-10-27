class TodoItem < ApplicationRecord
  validates_presence_of :title
end
