import * as yup from 'yup';


const loginSchema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
  });

const Auth = {
  loginSchema
};

export default Auth;