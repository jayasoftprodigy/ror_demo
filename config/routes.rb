Rails.application.routes.draw do
  devise_for :users
  namespace :api, defaults: { format: :json } do
		namespace :v1 do
			resources :users, only: [:index] do
				collection do
				  post "forgot_password"
				  post "login"
				  post "social_login"
				  post "register"
				  post "profile"
				  get "get_user_profile"
				  get "logout"
				  post "change_password"
				  get "get_image"
				  post "update_image"
				  get "get_all_users"
				end
				member do
					get "user_by_id"
					get "delete_user"
					put "update_user_by_id"
          post "update_image_by_id"
				end
			end
		end
	end
	  get 'users/update_password' => 'users#update_password'
	  get 'users/update_successfully' => 'users#update_successfully'
    post 'users/edit_password' => 'users#edit_password'
    get '/admin' => 'users#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
