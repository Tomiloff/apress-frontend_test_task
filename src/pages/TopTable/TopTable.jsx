import Header from "../../common/TopTable/Header/Header";
import TableContainer from "../../common/TopTable/Table/TableContainer";
import ModalWrapper from "../../features/TopTable/ModalWrapper/ModalWrapper";


const TopTable = ({topTable, displayModal, dataForModal, openModal, hideModal}) => {
 
  return (
    <>
      <Header />
      <TableContainer products={topTable.products} openModal={openModal} />
      <ModalWrapper displayModal={displayModal} hideModal={hideModal} dataForModal={dataForModal} />
    </>
  )
};

export default TopTable;