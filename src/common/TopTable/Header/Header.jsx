import styles from "./Header.module.css";
import { Field, Form, Formik } from "formik";
import searchIcon from "../../../assets/all-images/icons/search.svg";


const Header = ({setValueSearchInput}) => {

  const handleOnChange = (e) => {
    setValueSearchInput(e.target.value)
  };

  return (
    <header className={styles.header}>
      <Formik 
        initialValues={{
          search: "",
          }}
        >
        <Form className={styles.header_search} onChange={handleOnChange}>
          <Field name="search" type="search" placeholder="Фильтр по названию товара" maxLength="25" className={styles.search_input} />
          <button type="submit">
            <img src={searchIcon} alt="search icon" className={styles.search_input_icon} />
          </button>
        </Form>
      </Formik>
    </header>
  )
};

export default Header;