export class User {
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  createdAt: string = '';
  updatedAt: string = '';
  token: string = '';
  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}

export class Auth {
  username: string = '';
  password: string = '';
  public constructor(init?: Partial<Auth>) {
    Object.assign(this, init);
  }
}
export class SigninModel {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  public constructor(init?: Partial<SigninModel>) {
    Object.assign(this, init);
  }
}
export class SignUpModel {
  username: string = '';
  emailAddress: string = '';
  pass: PasswordModel = new PasswordModel();
  public constructor(init?: Partial<SignUpModel>) {
    Object.assign(this, init);
  }
}

export class PasswordModel {
  password: string = '';
  confirmPassword: string = '';
  public constructor(init?: Partial<PasswordModel>) {
    Object.assign(this, init);
  }
}
