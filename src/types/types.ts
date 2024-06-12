export interface User {
  accessToken: string;
  avatar: string | null;
  average_rating: string | null;
  birthdate: string | null;
  created_at: string;
  email: string;
  gender: string;
  id: string;
  lastPasswordChange: string;
  nickname: string | null;
  phone: string | null;
  real_name: string;
  self_introduction: string | null;
  total_reviews: string | null;
  updated_at: string;
  is_deleted: boolean;
  is_sitter: boolean;
}

export interface Task {
  accept_sitter_contact: boolean;
  city: string;
  cover: string;
  created_at: string;
  description: string;
  district: string;
  end_at: string;
  id: string;
  order_id: null | string;
  pet_id: string;
  public: string;
  review_id: string;
  service_type: string;
  start_at: string;
  status: string;
  title: string;
  total: number;
  unit_price: number;
  updated_at: string;
  user_id: string;
}

export interface RegisterResponse {
  status: boolean;
  message: string;
  data: User;
}

export interface LoginResponse {
  status: boolean;
  message: string;
  data: User;
}

export interface ResetPasswordResponse {
  status: boolean;
  message: string;
  data: User;
}

export interface SearchTasksResponse {
  status: boolean;
  message: string;
  data: {
    tasks_list: Task;
  };
}
