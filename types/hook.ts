/* eslint-disable camelcase */

export interface FormError {
  [key: string]: {isInvalid: boolean; message: string | null};
}

export interface ValidationResult {
  isInvalid: boolean;
  message: string | null;
}

export interface RegisterData {
  [key: string]: any;
  tos: boolean[];
  email: string;
  password: string;
  mobile: string;
  nickname: string;
  description: string;
  category: string[];
}
