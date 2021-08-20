import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup
    .string()
    .oneOf(["small", "medium", "large", "XL"], "size is required")
    .required(),
  cheese: yup.boolean(),
  pepperoni: yup.boolean(),
  onion: yup.boolean(),
  sausage: yup.boolean(),
  special: yup.string().trim(),
});

export default formSchema;
