object false
unless @users.present?
  node :users do
    []
  end
	else
	  child  @users, :root => "users" ,:object_root => false do
	    attributes :id, :name, :image, :email
	    node(:role_type) { |user| user.user_role(user.user_role_id)}
	    node(:role) { |user| user.role_by_id(user.user_role_id)}
	end
end