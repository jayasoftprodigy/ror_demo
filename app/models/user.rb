class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def user_role(role_id)
    role = UserRole.find_by(id: role_id).try(:role_type)
    return role if role.present?
    return ''
  end

  def role_by_id(user_role_id)
    role = UserRole.find_by(id: user_role_id).try(:role)
    return role if role.present?
    return ''
  end

  def self.create_default_roles
    UserRole.create(role: 0, role_type: 'Customer')
    UserRole.create(role: 1, role_type: 'Staff')
    UserRole.create(role: 2, role_type: 'Admin')
  end

  # Get info from facebook account
  def self.connect_with_facebook(access_token)
    response = HTTParty.get('https://graph.facebook.com/me', query: { access_token: access_token, fields: 'id,picture,first_name,last_name,email' }).parsed_response.with_indifferent_access
    return response
  end

  # Get info from google account
  def self.connect_with_google(token)

    response = HTTParty.get('https://www.googleapis.com/oauth2/v2/userinfo',
                            headers: { 'Access_token': token,
                                       'Authorization': "OAuth #{token}" }).parsed_response.with_indifferent_access
    puts "----------#{response.inspect}"
    return response

  end

  def process_uri(uri)
    require 'open-uri'
    require 'open_uri_redirections'
    open(uri, :allow_redirections => :safe) do |r|
      r.base_uri.to_s
    end
  end

  def notification_android(hsh)
    require 'fcm'
    fcm = FCM.new("Fcm-Key")
    registration_ids = ["#{device_id}"] # an array of one or more client registration tokens # an array of one or more client registration tokens
    options = { data: { wasTapped: true, title: hsh[:title], text_message: hsh[:message], order_id: hsh[:instance_id], status: hsh[:status], type: hsh[:noti_type] }, priority: 'high', notification: { title: hsh[:title], body: hsh[:message], sound: 'default', badge: 1, icon: '', wasTapped: true } }
    response = fcm.send(registration_ids, options)
    puts "response android====>>>>> #{response}"
  end

  #Notification send ios
  def notification_ios(hsh)
    require 'fcm'
    fcm = FCM.new("Fcm-Key")
    registration_ids = ["#{device_id}"] # an array of one or more client registration tokens # an array of one or more client registration tokens
    # options = HashWithIndifferentAccess.new
    options = { data: { wasTapped: true, title: hsh[:title], text_message: hsh[:message], order_id: hsh[:instance_id], status: hsh[:status], type: hsh[:noti_type] }, priority: 'high', notification: { title: hsh[:title], body: hsh[:message], sound: 'default', badge: 1, icon: '', wasTapped: true } }
    response = fcm.send(registration_ids, options)
    puts "response ios ====>>>>> #{response}"
  end

  def send_notification(hsh)
    puts 'Notification Send'
    user = User.find_by(id: hsh[:request_sent_to])
    puts "user id---------->#{user.id}"
    user.notifications.create!(message: hsh[:message], details: hsh, instance_id: hsh[:instance_id], noti_type: hsh[:noti_type])
    if self.notification_toogle.present?
      if user.device_tpe == 'A'
        user.notification_android(hsh)
        puts "android #{device_tpe}"
      elsif user.device_tpe == 'I'
        user.notification_ios(hsh)
        puts "ios #{device_tpe}"
      end
    end
  end

end
