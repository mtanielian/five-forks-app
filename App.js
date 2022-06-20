// import { auth } from './src/firebase/config';

import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/router/AppNavigation";

export default function App() {
  /*
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user)
    })
  }, [])
  */

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

