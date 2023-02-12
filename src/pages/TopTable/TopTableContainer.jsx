import { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../common/TopTable/Header/Header";
import Table from "../../common/TopTable/Table/Table";
import { requestProducts } from "../../stores/reducers/topTable-reducer";


const TopTableContainer = ({topTable, requestProducts}) => {

  useEffect(() => {
    console.log("render-top-table");
    requestProducts();
  }, []);

  return (
    <>
      <Header />
      <Table products={topTable.products} />
    </>
  )
};


const mapStateToProps = (state) => {
  return {
    topTable: state.topTable
  }
};

export default connect(mapStateToProps, {requestProducts}) (TopTableContainer);