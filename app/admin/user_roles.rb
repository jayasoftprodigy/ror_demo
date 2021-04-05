ActiveAdmin.register UserRole do
  permit_params :role, :role_type

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  #
  # or
  #
  # permit_params do
  #   permitted = [:role, :role_type]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
