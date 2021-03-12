export interface ListUser {
  count: number;
  next?: any;
  previous?: any;
  results: User[];
}

export interface User {
  id?: number;
  username?: string;
  password?: string;
  last_login?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  is_active?: boolean;
  date_joined?: string;
  phone?: any;
  birthday?: string;
  cc?: any;
}