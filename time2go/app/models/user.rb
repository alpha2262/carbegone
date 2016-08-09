class User < ActiveRecord::Base
  attr_accessor :user, :location, :destination

  # validates :user, :length => {minimum: => 5}
  # validates :current_location, => :presence = true
  # validates :destination, :presence = true

end
