import * as yup from 'yup';

const playlistSchema = yup.object().shape({
  title: yup.string().required('Campo de title obrigátorio'),
  duration: yup.string().required('Campo de duração obrigátorio'),
  releasedDate: yup
    .string()
    .required('Campo de data de lançamento obrigátorio'),
  genres: yup.string().required('Campo de data de genêro obrigátorio'),
});
