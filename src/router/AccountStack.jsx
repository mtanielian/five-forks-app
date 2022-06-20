import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AccountScreen from "../screens/account/AccountScreen"
import LoginScreen from "../screens/account/login/LoginScreen"
import ResgisterScreen from "../screens/account/register/RegisterScreen"


const Stack = createNativeStackNavigator()


const AccountStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Account"
      component={AccountScreen}
      options={{ title: "Account" }}
    />
    <Stack.Screen 
      name="Login"
      component={LoginScreen}
      options={{ title: "Login" }}
    />
    <Stack.Screen 
      name="Register"
      component={ResgisterScreen}
      options={{ title: "Register" }}
    />
  </Stack.Navigator>
)

export default AccountStack