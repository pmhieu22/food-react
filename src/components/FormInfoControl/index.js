import { Button, Form, Input } from "antd";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import foodApi from "../../service/apis/foodApi";

const initData = {
  fullName: "",
  street: "",
  postalCode: "",
  city: "",
};

const infoSchema = Yup.object().shape({
  fullName: Yup.string().required("Yêu cầu nhâp đầy đủ thông tin cá nhân!"),
  street: Yup.string().required("Yêu cầu nhâp đầy đủ thông tin cá nhân!"),
  postalCode: Yup.string().required("Yêu cầu nhâp đầy đủ thông tin cá nhân!"),
  city: Yup.string().required("Yêu cầu nhâp đầy đủ thông tin cá nhân!"),
});

const FormInfoControl = () => {
  const foodItem = useSelector((state) => state.foodReducer.foodItem);

  const infoFormik = useFormik({
    initialValues: initData,
    validationSchema: infoSchema,
    onSubmit: async (values) => {
      await foodApi.updateFoodOrder(values, foodItem.meals);
      console.log("success")
    },
  });

  const { handleChange, handleSubmit, values, errors } = infoFormik;

  return (
    <Form
      name="info"
      labelAlign={"left"}
      labelCol={{
        xs: { span: 12 },
        sm: { span: 6 },
      }}
      labelWrap
      colon={false}
    >
      <Form.Item
        label="Your Name"
        validateStatus={errors?.fullName ? "error" : ""}
        help={errors?.fullName ? errors?.fullName : ""}
      >
        <Input
          id="fullName"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        label="Street"
        validateStatus={errors?.street ? "error" : ""}
        help={errors?.street ? errors?.street : ""}
      >
        <Input
          id="street"
          name="street"
          value={values.street}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        label="Postal Code"
        validateStatus={errors?.postalCode ? "error" : ""}
        help={errors?.postalCode ? errors?.postalCode : ""}
      >
        <Input
          id="postalCode"
          name="postalCode"
          value={values.postalCode}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        label="City"
        validateStatus={errors?.city ? "error" : ""}
        help={errors?.city ? errors?.city : ""}
      >
        <Input
          id="city"
          name="city"
          value={values.city}
          onChange={handleChange}
        />
      </Form.Item>
      <Button type="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default FormInfoControl;
