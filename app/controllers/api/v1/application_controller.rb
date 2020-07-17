class Api::V1::ApplicationController < ActionController::API


  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    begin
    	raise "Please enter Authorization in your headers" unless header.present?
      @decoded = JsonWebToken.decode(header)
      @current_api_user = User.find(@decoded[:user_id]) if @decoded.present?
      raise "User not Found" unless @current_api_user.present?
    rescue Exception => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end


	def error_handle_bad_request(msg)
    puts "Exception Raised on #{Time.now} #{msg}"
    ary_errors = []
    ary_errors_obj = {}
    ary_errors_obj[:domain] = "usageLimits"
    ary_errors_obj[:reason] = msg
    ary_errors_obj[:message] = msg
    ary_errors_obj[:extendedHelp] = ""
    ary_errors.push(ary_errors_obj)
    error_obj = {}
    error_obj[:errors] = ary_errors
    error_obj[:code] = 400
    error_obj[:message] = msg
    err_hash = {}
    err_hash[:error] = error_obj 
    render :json => err_hash.to_json, status: :bad_request
    
  end
end
