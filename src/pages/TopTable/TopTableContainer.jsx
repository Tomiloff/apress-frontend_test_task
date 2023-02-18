import TopTable from "./TopTable";
import { requestProducts } from "../../stores/reducers/topTable-reducer";
import { useEffect, useState } from "react";
import { connect } from "react-redux";


const html = document.querySelector("html");
const body = document.querySelector("body");

const TopTableContainer = ({topTable, requestProducts}) => {

  const [hide, setHide] = useState(true);
  const [dataForModal, setDataForModal] = useState({});

  useEffect(() => {
    requestProducts();
  }, []);

  const openModal = (nameProduct) => {
    setHide(false);

    const productForModal = topTable.products.find(({name}) => name === nameProduct);
    setDataForModal(productForModal);
      
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
  };

  const hideModal = () => {
    setHide(true);

    html.style.overflow = "visible";
    body.style.overflow = "visible";
  };

  return <TopTable topTable={topTable} hide={hide} 
    dataForModal={dataForModal} openModal={openModal} 
    hideModal={hideModal} />    
};


const mapStateToProps = (state) => {
  return {
    topTable: state.topTable
  }
};

export default connect(mapStateToProps, {requestProducts}) (TopTableContainer);