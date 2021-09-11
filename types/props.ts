/* eslint-disable camelcase */
import {InputProps} from '@chakra-ui/input';
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
  label?: string;
}

export interface InputFormProps extends FormProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocusOut?: FocusEventHandler<HTMLInputElement>;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  helperText?: string;
  helperTextColor?: InputProps['color'];
}

export interface TextareaFormProps extends FormProps {
  onTextareaChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export interface ButtonFormProps extends FormProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CheckboxFormProps extends FormProps {
  itemList: string[];
  checked: string[];
  onCheckboxChange: (checkboxItem: string, isChecked: boolean) => void;
}
