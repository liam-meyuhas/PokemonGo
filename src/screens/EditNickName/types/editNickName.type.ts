import {Control, FieldErrors} from 'react-hook-form';

export type FormData = {
  username: string;
};

export type EditNickNameProps = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
};
