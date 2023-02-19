import { connect } from "react-redux";
import App from "./App";


const AppContainer = ({initialized}) => {
  return <App initialized={initialized} />
};


const mapStateToProps = (state) => ({
  initialized: state.topTable.initialized
})


export default connect(mapStateToProps, null)(AppContainer);