import User from '../types/User'

export default class UserModel {
  private readonly user: User

  constructor() {
    this.user = {
      username: 'admin',
      password: 'admin',
    }
  }

  public validateUser(username: string, password: string): User {
    if (username === this.user.username && password === this.user.password) {
      return this.user
    }
    return this.NullUser()
  }

  public NullUser(): User {
    return {
      username: 'Not Found in Database',
      password: 'Not Found in Database',
    }
  }
}
