# README

This README would normally document whatever steps are necessary to get the
application up and running.


* Installation

  # Clone this repo to your local machine using https://github.com/SoftprodigyIndia/ror-apis.git or download the zip file from https://github.com/SoftprodigyIndia/ror-apis/archive/master.zip

* Setup

  - Run the following commands on your terminal to setup this project
    # "rvm use 2.7.0@ror-apis --create" to create gemset.
    # "bundle install" to install all the packages.
    # "rake db:create" to create the database.
    # "rake db:migrate" to run all the migrations.
    # "rake db:seed" to prepopulate the data in your database.
    # "bundle exec rails s" to start your rails server.

* Useful Links

  # Postman api collection: "/public/Basic_api_collection.postman_collection.json"
  # Also swagger test module in "your_app_url/api" (eg:- http://localhost:3000/api)
  # For demo
    - website link:- "https://rorapistaging.herokuapp.com/"
    - Admin url :- "admin@admin.com"
    - Admin url :- "admin@123"
  
  
* some useful gems
  
# CanCanCan gem
  CanCan is an authorization library for Ruby on Rails which restricts what resources a given user is allowed to access.
  All permissions are defined in a single location (the Ability class) and not duplicated across controllers, views, and database queries.
  
-Setup
  1. add gem "gem 'cancancan'" in gemfile and run bundle install.
  2. run by "rails g cancan:ability" to create User permissions are defined in an Ability class.
  3. Use "load_and_authorize_resource" method is provided to automatically authorize all actions in a RESTful style 
     resource controller. It will use a before filter to load the resource into an instance variable and authorize it for every action.
  4. Handle Unauthorized Access: If the user authorization fails, a CanCan::AccessDenied exception will be raised. 
     You can catch this and modify its behavior in the ApplicationController.
     class ApplicationController < ActionController::Base
        rescue_from CanCan::AccessDenied do |exception|
           redirect_to root_url, :alert => exception.message
        end
     end
  5. in our app abilities are define below: 
     >abilities:  
     1. Admin have an all access.
     2. Staff have an ability to update.
     3. Customer can manage their profile.
  

  # Active Admin gem
  Active Admin is a Ruby on Rails framework for creating elegant backends for website administration.
 
-Setup
  1. add gem "gem 'activeadmin'" in gemfile.
  2. After updating your bundle, run the installer "rails generate active_admin:install"(The installer creates an 
     initializer used for configuring defaults used by Active Admin as well as a new folder at app/admin to put all 
     your admin configurations.)
  Note: Uncomment this line "require 'sprockets/railtie'" in application.rb/config.
  3. Migrate your db and start the server:
    $> rails db:seed
    $> rails db:migrate
    $> rails server
  4. Visit http://localhost:3000/admin and log in using:
     login: admin@example.com
     password: password
     > You’re on your brand new Active Admin dashboard.
  5. To register your first model, run:
     $> rails generate active_admin:resource ModelName(User)
     
## active admin module in "your_app_url/api" (eg:- http://localhost:3000/admin)
    
  - website link:- "https://rorapistaging.herokuapp.com/admin"
  - Admin login :- "admin@example.com"
  - Admin password :- "password"
   
  
