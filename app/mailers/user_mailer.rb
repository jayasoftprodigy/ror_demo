class UserMailer < ApplicationMailer
	 def forgot_password_on_mail(detail)
    @user = detail[:user]
    @url = detail[:url]+''+"/users/update_password?token=#{detail[:token]}" 
    mail(to: @user.email,subject: "Reset password Instruction")
  end
end
