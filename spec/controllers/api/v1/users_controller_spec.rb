require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  include ControllerSpecHelper

  describe "#register /api/v1/users/register" do
    it "register a new user" do
      create(:user_role)
      post :register, params: {user: {name: 'Cletus', email: 'cletus@mccletus.com', password: 'cletus12345', role: '0'}}
      expect(response).to have_http_status(:success)
    end
  end

  describe "#login /api/v1/users/login" do
    it "log in user" do
      create(:user)
      post :login, params: {user: {email: 'example@gmail.com', password: 'password', device_id: "1", device_type: "A"}}
      expect(response).to have_http_status(:success)
    end
  end

  describe "#forgot_password" do
    it "forget password" do
      create(:user)
      post :forgot_password, params: {user: {email: 'example@gmail.com'}}
      expect(response).to have_http_status(:success)
    end
  end

  describe "#change_password /api/v1/users/change_password" do
    context 'without token user try to change password' do
      it "return unauthorized" do
        create(:user)
        post :change_password, params: {user: {old_password: 'password', new_password: 'password123'}}
        expect(response).to be_unauthorized
      end
    end

    context 'with token user  change password' do
      it "return authorized" do
        user = create(:user)
        post :change_password, params: {headers: valid_headers(user.id),user:{old_password: 'password', new_password: 'password123'}}
        expect(response).to have_http_status(:success)
      end
    end
  end

  describe "#profile /api/v1/users/profile" do
    it "get profile" do
      user = create(:user)
      post :profile, params: {headers: valid_headers(user.id), user:{name: "FactoryBot2"}}
      expect(response).to render :user
    end
  end

  describe "#get_user_profile /api/v1/users/get_user_profile" do
    it "get_user_profile" do
      user = create(:user)
      get :get_user_profile, params: {headers: valid_headers(user.id)}
      expect(response).to have_http_status(:success)
    end
  end

  describe "#get_all_users /api/v1/users/get_all_users" do
    it "if user is admin get_all_users" do
      get :get_all_users
      expect(response).to have_http_status(:success)
    end
  end

end
