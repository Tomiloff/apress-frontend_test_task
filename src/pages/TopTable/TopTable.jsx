import Header from "../../common/TopTable/Header/Header";
import TableContainer from "../../common/TopTable/Table/TableContainer";
import ModalWrapper from "../../features/TopTable/ModalWrapper/ModalWrapper";


const TopTable = ({topTable, hide, dataForModal, openModal, hideModal}) => {
 
  return (
    <>
      <Header />
      <TableContainer products={topTable.products} openModal={openModal} />
      <ModalWrapper hide={hide} hideModal={hideModal} dataForModal={dataForModal} />
    </>
  )
};

export default TopTable;