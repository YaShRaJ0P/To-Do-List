import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
import { Body } from "./components/Body";

export const App = () => {
  return (
    //data is provided to the whole application through this provider, so that any component can
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};
