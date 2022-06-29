// import { auth } from './src/firebase/config';

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigation from "./src/router/AppNavigation";
import { persistor, store } from "./src/store/store";

export default function App() {
  /*
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user)
    })
  }, [])
  */

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

