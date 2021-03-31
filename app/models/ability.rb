# add abilities
class Ability
  include CanCan::Ability

  def initialize(user)
    # Define abilities for the passed in user here. For example:
    user ||= User.new # guest user (not logged in)
    u_role = user.user_role(user.user_role_id)
    if user.is_admin?
      can :manage, :all
    elsif u_role == 'Staff'
      can :read, User
      can [:user_by_id, :update_user_by_id], User
    else
      can :read, User
      can :manage, User, id: user.id
    end
  end
end
