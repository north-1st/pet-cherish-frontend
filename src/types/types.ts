// TypeScript 型別
export interface RegisterResponse {
  status: boolean;
  message: string;
  data: {
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
  };
}
