import { useFormik } from "formik";
import styles from "./index.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import useActions from "../../redux/useActions";

const initData = {
  amount: 1,
};

const foodSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Yêu cầu điền số lượng món ăn!")
    .positive("Gía trị không được âm!")
    .integer("Giá trị phải là số nguyên!"),
});

const MealControl = ({ name, description, price, id }) => {
  const dispatch = useDispatch();
  const { foodActions } = useActions();

  const amountFormik = useFormik({
    initialValues: initData,
    validationSchema: foodSchema,
    onSubmit: (values) => {
      dispatch(foodActions.actions.addFood(id, values));
    },
  });

  const { handleChange, handleSubmit, values, errors } = amountFormik;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={values.amount}
            onChange={handleChange}
          />
        </div>
        {errors.amount ? <span>{errors.amount}</span> : null}
        <button type="submit">+ Add</button>
      </form>
    </li>
  );
};

export default MealControl;
