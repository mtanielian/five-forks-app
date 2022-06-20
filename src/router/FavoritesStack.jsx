import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesScreen from "../screens/favorites/FavoritesScreen";

const Stack = createNativeStackNavigator();

const FavoritesStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Favorites" 
      component={FavoritesScreen} 
      options={{ title: "Favorites" }}
    />
  </Stack.Navigator>
)


export default FavoritesStack