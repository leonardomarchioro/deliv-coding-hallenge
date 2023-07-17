import * as yup from "yup";

const createSchema = yup.object().shape({
    deliveryAddressId: yup.number(),
    clientName: yup.string().required('Campo obrigatório'),
  });

  const updateSchema = yup.object().shape({
    deliveryAddressId: yup.number(),
    clientName: yup.string().required('Campo obrigatório'),
    status: yup.string()
  });

  const Request = {
    createSchema,
    updateSchema
  }

  export default Request;