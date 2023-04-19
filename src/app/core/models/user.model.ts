import { Validators } from '@angular/forms';

export class User {
  email?: string;
  password?: string;
  message?: string;
}
export class responseData {
  exceptionMessage?: string;
  message?: string;
  isSuccess?: boolean;
  statusCode?: number;
  response?: response;
}
export class response {
  email?: string;
  fullName?: string;
  token?: string;
  userId?: string;
  userRole?: string;
}

export class Signup {
  email?: string;
  firstName?: string;
  lastName?: string;
  mobileNumber?: string;
  gender?: string;
  password?: string;
  confirmpassword?: string;

  //not in the UI
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  userName?: string;
  countryCode?: string;
  phoneNumber?: string;
}

export class UserListResponse {
  exceptionMessage?: string;
  message?: string;
  isSuccess?: boolean;
  statusCode?: number;
  response?: UserList[];
}
export class UserList {
  email?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  id?: string;
}
