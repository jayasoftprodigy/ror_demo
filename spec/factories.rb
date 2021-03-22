FactoryBot.define do

  factory :user_role do
    role      {0}
    role_type {"Customer"}
  end

  factory :user do
    email    {"example@gmail.com"}
    name     {"FactoryBot"}
    password {"password"}
  end

end


