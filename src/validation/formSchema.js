import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().trim().required("Name is required"),
  size: yup
    .string()
    .oneOf(["small", "medium", "large", "XL"], "size is required"),
  cheese: yup.boolean(),
  pepperoni: yup.boolean(),
  onion: yup.boolean(),
  sausage: yup.boolean(),
  special: yup.string().trim(),
});

export default formSchema;
