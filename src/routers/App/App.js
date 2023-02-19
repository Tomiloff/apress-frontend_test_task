import Preloader from "../../common/TopTable/Preloader/Preloader";
import TopTableContainer from "../../pages/TopTable/TopTableContainer";


const App = ({initialized}) => {

  return (
    <>
      {!initialized && <Preloader />}  
      <TopTableContainer />
    </>
  )
};

export default App;