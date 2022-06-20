import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SearchScreen from "../screens/search/SearchScreen"

const Stack = createNativeStackNavigator()

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Search" component={SearchScreen} options={{ title: "Search" }} />
  </Stack.Navigator>
)

export default SearchStack