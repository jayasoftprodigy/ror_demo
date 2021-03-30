class UsersController < ApplicationController
  def update_password
    @user = User.new
  end

  def edit_password
    token = params[:token]
    password = params[:user][:password]
    password_confirmation = params[:user][:password_confirmation]
    begin
      raise "confirm password can't be blank." if password_confirmation.blank?
      raise "Token is Invaild" unless token.present?
      @user = User.find_by_reset_password_token(token)
      raise "Token has been expired" if @user.nil?
      raise "Password and confirm password does not match." if (password != password_confirmation)
      @user.update_attributes(password: password)
      redirect_to users_update_successfully_path
    rescue Exception => e
      redirect_to users_update_password_path(token: token), notice: e.message
    end
  end

  def update_successfully
  end

  def index
  end
end
