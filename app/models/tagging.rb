class Tagging < ActiveRecord::Base
  belongs_to :deck
  belongs_to :tag
end
