import * as yup from 'yup';

const loginUserShape = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(4).required(),
});

export default loginUserShape;
