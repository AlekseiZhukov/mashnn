import * as Yup from "yup";
import "yup-phone";

const FormSchemaValidation = Yup.object().shape({
    email: Yup.string()
        .email("неверный email адрес")
        .required("Обязательное поле"),
    username: Yup.string()
        .min(3, "минимум 3 символа")
        .required("Обязательное поле"),
    phone: Yup.string()
        .phone("", false, 'неверный телефона')
        .required("Обязательное поле"),
    message: Yup.string()
        .min(2, "минимум 2 символа")
        .required("Обязательное поле")
});
export default FormSchemaValidation;