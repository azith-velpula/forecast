import Content from "./components/Content";
import appStore from "./redux/appStore";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Content />
      </div>
    </Provider>
  );
}

export default App;
