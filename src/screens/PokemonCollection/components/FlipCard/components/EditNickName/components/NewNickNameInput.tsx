import {Text} from 'native-base';
import React from 'react';
import {Control, Controller, FieldErrors} from 'react-hook-form';
import {TextInput} from 'react-native';
import {FormData} from '../types/editNickName.type';

const NewNickNameInput: React.FC<{
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}> = ({control, errors}) => {
  return (
    <Controller
      control={control}
      name="username"
      rules={{
        required: 'Username is required',
        maxLength: {
          value: 5,
          message: 'Limit your input to 5 characters',
        },
      }}
      render={({field: {onChange, onBlur, value}}) => (
        <>
          <TextInput
            placeholder="Enter new nickname"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{
              width: 200,
              borderWidth: 1,
              borderColor: errors.username ? 'red' : 'white',
              marginBottom: 5,
              padding: 10,
              borderRadius: 5,
              color: 'white',
            }}
          />
          {errors.username && (
            <Text
              style={{
                color: 'red',
              }}>{`${errors.username.message}`}</Text>
          )}
        </>
      )}
    />
  );
};

export default NewNickNameInput;
