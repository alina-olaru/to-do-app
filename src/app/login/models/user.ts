export interface User{
  firstName: string;
  lastName: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  token: string;
}

export class Auth{
  username:string;
  password:string;
  constructor(){
    this.password="";
    this.username="";
    // TODO: constructor partial
  }
}
export interface SigninModel{
  username: string;
  password: string;
  rememberMe: boolean;
}
export interface SignUpModel{
  username: string;
  emailAddress: string;
  pass:PasswordModel;
}

export interface PasswordModel{
  password: string;
  confirmPassword:string;
}

