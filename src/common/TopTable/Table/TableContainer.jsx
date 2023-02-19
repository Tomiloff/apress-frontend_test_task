import { useEffect, useState } from "react";
import Table from "./Table";


const TableContainer = ({openModal, filtredProductsName}) => {

  const [pageWidth, setPageWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setPageWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [pageWidth]);

  return <Table pageWidth={pageWidth} openModal={openModal} filtredProductsName={filtredProductsName} />
};

export default TableContainer;