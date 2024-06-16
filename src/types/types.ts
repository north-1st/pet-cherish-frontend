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

export interface Pet {
  avatar_list: string[];
  breed: string;
  character_list: string[];
  created_at: string;
  has_microchipped: boolean;
  health_description: string;
  id: string;
  is_neutered: boolean;
  name: string;
  owner_user_id: string;
  size: string;
  updated_at: string;
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
  pet: Pet;
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

export interface Sitter {
  avatar: null | string;
  average_rating: number;
  certificate_list: string[];
  nickname: string;
  real_name: string;
  service_city: string;
  service_description: string;
  service_district_list: string[];
  service_type_list: string[];
  status: string;
  total_reviews: number;
  user_id: string;
}

export interface Pagination {
  current_page: number;
  has_next_page: boolean;
  has_prev_page: boolean;
  total_pages: number;
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
    tasks_list: Task[];
  };
  pagination: Pagination;
  total: number;
}

export interface SearchSittersResponse {
  status: boolean;
  message: string;
  data: {
    sitter_list: Sitter[];
  };
  pagination: Pagination;
  total: number;
}
