import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AddRestaurantScreen from "../screens/restaurant/AddRestaurantScreen"
import RestaurantScreen from "../screens/restaurant/RestaurantScreen"

const Stack = createNativeStackNavigator()

const RestaurantStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Restaurant" 
        component={RestaurantScreen} 
        options={{ title: "Restaurant" }}
      />
      <Stack.Screen 
        name="AddRestaurant" 
        component={AddRestaurantScreen} 
        options={{ title: "New Restaurant" }}
      />
    </Stack.Navigator>
  )
}

export default RestaurantStack