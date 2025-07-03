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
    return this.getNullUser()
  }

  private getNullUser(): User {
    return {
      username: 'Not Found',
      password: 'Not Found',
    }
  }
}
