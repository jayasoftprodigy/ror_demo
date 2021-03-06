# frozen_string_literal: true

module ControllerSpecHelper
  # generate tokens from user id
  def token_generator(user_id)
    JsonWebToken.encode(user_id: user_id)
  end

  # return valid headers
  def valid_headers(user_id)
    request.env['HTTP_AUTHORIZATION'] = token_generator(user_id)
    request.env['HTTP_ACCEPT'] = 'application/json'
  end

  # return invalid headers
  def invalid_headers
    request.env['HTTP_AUTHORIZATION'] = nil
  end
end
