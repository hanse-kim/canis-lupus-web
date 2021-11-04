/* eslint-disable camelcase */

export interface FormErrorContainer {
  [key: string]: FormError;
}

export interface FormError {
  isInvalid: boolean;
  message: string | null;
}

export interface ValidationResult {
  isInvalid: boolean;
  message: string | null;
}

export interface SearchQuery {
  searchBy: 'keyword' | 'category' | 'mygroups' | 'all';
  value?: string;
  options?: {
    limit?: number;
  }
}
