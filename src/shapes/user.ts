import * as yup from 'yup';

export const userSchema = yup.object().shape({
  username: yup.string().required('Campo de name obrigátorio'),
  password: yup.string().required('Campo de senha obrigátorio'),
});
