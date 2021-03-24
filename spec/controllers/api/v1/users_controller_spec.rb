require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  include ControllerSpecHelper

  let(:user) { create(:user) }
  let(:user_role) {create(:user_role)}

  describe "#register" do
    it "register a new user" do
      user_role
      post :register, params: {user: {name: 'Cletus', email: 'cletus@mccletus.com', password: 'cletus12345', role: '0'}}
      expect(response).to have_http_status(:success)
    end
  end

  describe "#login" do
    it "log in user" do
      user
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

  describe "#change_password" do
    let(:user) { create(:user) }

    context 'without token user try to change password' do
      it "return unauthorized" do
        post :change_password, params: {user: {old_password: 'password', new_password: 'password123'}}
        expect(response).to be_unauthorized
      end
    end

    context 'with token user  change password' do
      it "return authorized" do
        post :change_password, params: {headers: valid_headers(user.id),user:{old_password: 'password', new_password: 'password123'}}
        expect(response).to have_http_status(:success)
      end
    end
  end

  describe "#profile /api/v1/users/profile" do
    it "get profile" do
      user
      post :profile, params: {headers: valid_headers(user.id), user:{name: "FactoryBot2"}}
      expect(response.status).to eq(200)
    end
  end

  describe "#get_user_profile /api/v1/users/get_user_profile" do
    it "get_user_profile" do
      get :get_user_profile, params: {headers: valid_headers(user.id)}
      expect(response).to have_http_status(:success)
    end
  end

  describe "#get_image" do
    it "get_image" do
      get :get_image, params: {headers: valid_headers(user.id)}
      expect(response).to have_http_status(:success)
    end
  end

  describe "#social_login " do

    context 'login with facebook' do
      it "facebook -> change access token whenever use" do
        user_role
        get :social_login, params: {user: {login_with: "facebook", access_token: "EAAIHZCucRHIwBAHc8CStHZAf7tfFGEqZAElIb17uwFVu6TR0aZCzZB9A9qZC07jr0CjcY3tn4TxDD8lY8SRCfiQOnoqBtW7PwwYemaTQUvBFaAcJ7NpJcLjUM9kCt7TIa77ZCuZA8ZAbEsB0cQiq02iH6IKfG3mH50ZCWco0s08tzYYCAqRteSKybjuwk89QH1mcWGzsxPwro1NNsQrygLoR0iIHtbzpljIZABSHLvZBNsYsACD3K08BGCi1",
                                           device_id: "1", role: "0"}, headers: valid_headers(user.id)}
        expect(response).to have_http_status(:success)
      end
    end

    context 'login with google' do
      it "google -> change access token whenever use " do
        user_role
        get :social_login, params: {user: {login_with: "google", access_token: "ya29.a0AfH6SMC8cCu8SePbka5PTcw1tVBRJhrgxd8olTJ3atqNqbdpGYSv4v3bU0X9vBxj-rZt2i2FX9MdmZP6JQvgdikHlWyK7Wlhp1bt_R-vkjos9uapV8nyuOs9W0ibRablnZIi82YI0jNIKH2UzjMMthJFTP15",
                                           device_id: "1", role: "0"}, headers: valid_headers(user.id)}
        expect(response).to have_http_status(:success)
      end
    end
  end


  describe "#delete_user" do
    it "should be deleted user" do
      get :delete_user, params: {headers: valid_headers(user.id), id: user.id}
      expect(response).to have_http_status(:success)
    end
  end

  describe "#user_by_id" do
    it "get user by id" do
      user
      get :user_by_id, params: {headers: valid_headers(user.id), id: user.id}
      expect(response).to have_http_status(:success)
    end
  end

  describe "#update_user_by_id" do

    context 'should update only role' do
      it "should be updated user with id" do
        user_role
        get :update_user_by_id, params: {headers: valid_headers(user.id), id: user.id, user:{role: 0}}
        expect(response).to have_http_status(:success)
      end
    end

    context 'should update role, name and password' do
      it "should be updated user with id" do
        user_role
        get :update_user_by_id, params: {headers: valid_headers(user.id), id: user.id, user:{name: "updated_name",password: "updated_password",role: 0}}
        expect(response).to have_http_status(:success)
      end
    end

  end

  describe "#get_all_users /api/v1/users/get_all_users" do
    let(:user) { create(:user, is_admin: true) }

    it "if user is admin get_all_users" do
      get :get_all_users, params: {headers: valid_headers(user.id)}
      expect(response).to have_http_status(:success)
    end
  end

  describe "#logout" do
    it "should be logout successfully" do
      get :logout, params: {headers: valid_headers(user.id)}
      expect(response).to have_http_status(:success)
    end
  end

end
