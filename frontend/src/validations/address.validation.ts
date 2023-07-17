import * as yup from "yup";

const createSchema = yup.object().shape({
    street: yup.string().required('Campo obrigatório'),
    district: yup.string().required('Campo obrigatório'),
    number: yup.number().typeError("Número é invalido").required('Campo obrigatório'),
  });


  const Address = {
    createSchema,
  }

  export default Address;