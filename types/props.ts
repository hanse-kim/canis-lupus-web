/* eslint-disable camelcase */
import {ChangeEventHandler, FocusEventHandler, MouseEventHandler} from 'react';
import {FormError} from './hook';

export interface ProductProps {
  id: string;
  title: string;
  desc: string;
  memberCount: number;
  url: string;
  imageUrl: string;
  tags: string[];
}

export interface FormContentProps {
  onSubmit: () => void;
}

export interface FormProps {
  error?: FormError;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocusOut?: FocusEventHandler<HTMLInputElement>;
  inputRef?: any;
}
