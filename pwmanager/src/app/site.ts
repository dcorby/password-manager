export interface Site {
  id: number;
  name: string;
  user_or_email: string;
  password: string;
  category: string;
  url: string,
  notes: string;
  last_used: number;
}
