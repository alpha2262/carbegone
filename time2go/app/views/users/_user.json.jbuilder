json.extract! user, :id, :user, :current_location, :destination, :people, :created_at, :updated_at
json.url user_url(user, format: :json)