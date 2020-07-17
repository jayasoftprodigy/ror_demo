class Api::V1::UsersController < Api::V1::ApplicationController
	before_action :authorize_request, except: [:login, :register, :forgot_password]

	def register
		begin
			user = User.find_by_email(params[:user][:email]) if params[:user][:email].present?
	      raise "Email is already exist" if user.present?
	    user = User.create!(user_params)
			token = JsonWebToken.encode(user_id: user.id)
			render json: { token: token,
			             user: user }, status: :ok
		rescue Exception => e
      error_handle_bad_request(e)
		end	
	end

	def login
		begin
			user = User.find_by_email(params[:user][:email]) if params[:user][:email].present?
	    raise "Please enter valid Email ID" unless user.present?
	    raise "Password is incorrect" unless user.valid_password?(params[:user][:password])
	    if user.present?
		    token = JsonWebToken.encode(user_id: user.id)
				render json: { token: token,user: user }, status: :ok
			else
				render json: { message: 'unauthorized' }, status: :unauthorized
			end
		rescue Exception => e
      error_handle_bad_request(e)
		end	
	end

	def forgot_password
	  	begin
				raise "Enter your email" unless params[:user][:email].present?
				user = User.find_by_email(params[:user][:email])
				raise "User not found" unless user.present?
				user.send_reset_password_instructions

				mailer={}

				mailer[:token] = user.reset_password_token
	      mailer[:user] = user
        mailer[:url] = request.base_url
        UserMailer.forgot_password_on_mail(mailer).deliver_now
				render :json => {message: "Email has been sent successfully"}
		rescue Exception => e
			error_handle_bad_request(e)
		end
	end

	def change_password
		begin
			raise "Please enter old password" unless params[:user][:old_password].present?
			raise "Please enter old new password" unless params[:user][:new_password].present?
			raise "old password is incorrect" unless @current_api_user.valid_password?(params[:user][:old_password])
			@current_api_user.update(password: params[:user][:new_password])
			render :json => {message: "Password has been changed successfully"}
		rescue Exception => e
				error_handle_bad_request(e)
			end
	end

	def profile
	 @current_api_user.update(profile_params)
	 render :user
	end

	def get_image
		render :json => {image: @current_api_user.try(:image)}
	end

	def update_image
		begin
			raise "Please choose Image File" unless params[:image].present?
			@current_api_user.update(image: params[:image])
			render :user
		rescue Exception => e
			error_handle_bad_request(e)
		end
	end


	def get_user_profile
		render :user
	end

	def logout
		begin
			token = JsonWebToken.encode(user_id: @current_api_user.id, exp: Time.now.to_i)
			render json: { token: nil , message: "logout successfully"}, status: :ok
		rescue Exception => e
			error_handle_bad_request(e)
		end
	end

	private

	def user_params
		params.require(:user).permit(:email, :password)
	end

	def profile_params
		params.require(:user).permit(:email, :name)
	end
end
