collection @user
	attributes :id, :name, :image, :email
	node(:role_type) { |user| user.user_role(user.user_role_id)}
	node(:role) { |user| user.role_by_id(user.user_role_id)}
	node(:code) { "200" }