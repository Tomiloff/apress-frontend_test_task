import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../../common/TableContainer/Header/Header";
import Table from "../../common/TableContainer/Table/Table";
import { requestProducts } from "../../stores/reducers/tableContainer-reducer";
import ModalWrapper from "../../features/TableContainer/ModalWrapper/ModalWrapper";


const html = document.querySelector("html");
const body = document.querySelector("body");


const TableContainer = ({topTable, requestProducts}) => {

  const [hide, setHide] = useState(true);
  const [dataForModal, setDataForModal] = useState({});

  useEffect(() => {
    requestProducts();
  }, []);

  const openModal = (e) => {
    setHide(false);

    const idProduct = e.target.closest("button").id;
    const productForModal = topTable.products.find(({id}) => id === idProduct);
    setDataForModal(productForModal);
      
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
  };

  const hideModal = () => {
    setHide(true);

    html.style.overflow = "visible";
    body.style.overflow = "visible";
  };
  
 
  return (
    <>
      <Header />
      <Table products={topTable.products} openModal={openModal} />
      <ModalWrapper hide={hide} hideModal={hideModal} dataForModal={dataForModal} />
    </>
  )
};


const mapStateToProps = (state) => {
  return {
    topTable: state.topTable
  }
};

export default connect(mapStateToProps, {requestProducts}) (TableContainer);