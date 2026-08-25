import { Provider } from "react-redux";

import { store } from "@/root/src/store";
import "../assets/styles/main.scss";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
