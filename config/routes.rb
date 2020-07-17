Rails.application.routes.draw do
  devise_for :users
  namespace :api, defaults: { format: :json } do
		namespace :v1 do
			resources :users, only: [:index] do
				collection do
				  post "forgot_password"
				  post "login"
				  post "register"
				  post "profile"
				  get "get_user_profile"
				  get "logout"
				  post "change_password"
				  get "get_image"
				  post "update_image"
				end
			end
		end
	end
	  get 'users/update_password' => 'users#update_password'
	  get 'users/update_successfully' => 'users#update_successfully'
    post 'users/edit_password' => 'users#edit_password'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
