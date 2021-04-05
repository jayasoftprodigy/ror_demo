ActiveAdmin.register User do
  permit_params :email, :password, :name, :is_admin, :user_role_id

  index do
    column :email
    column :name
    column :is_admin
    column :user_role_id

    actions
  end

  filter :email

  form do |f|
    f.inputs 'user Details' do
      f.input :name
      f.input :email
      f.input :is_admin
      f.input :user_role_id
      f.input :password
    end
    f.actions
  end

end
