import styles from "./Header.module.css";
import { Field, Form, Formik } from "formik";
import searchIcon from "../../../assets/all-images/icons/search.svg";


const Header = () => {
  return (
    <header className={styles.header}>
      <Formik initialValues={{search: ""}}>
        <Form className={styles.searchForm}>
          <Field name="search" placeholder="Фильтр по названию товара" type="search" className={styles.searchInput} />
          <button>
            <img src={searchIcon} alt="search icon" className={styles.searchIcon} />
          </button>
        </Form>
      </Formik>
    </header>
  )
};

export default Header;