import Header from "../../common/TopTable/Header/Header";
import TableContainer from "../../common/TopTable/Table/TableContainer";
import ModalWrapper from "../../features/TopTable/ModalWrapper/ModalWrapper";


const TopTable = ({displayModal, dataForModal, openModal, hideModal, setValueSearchInput, filtredProductsName}) => {
 
  return (
    <>
      <Header setValueSearchInput={setValueSearchInput} />
      <TableContainer openModal={openModal} filtredProductsName={filtredProductsName} />
      <ModalWrapper displayModal={displayModal} hideModal={hideModal} dataForModal={dataForModal} />
    </>
  )
};

export default TopTable;