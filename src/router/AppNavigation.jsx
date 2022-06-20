import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { routes } from "./routes"
import Icon from 'react-native-vector-icons/Ionicons'


const Tabs = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: "#00a680",
      tabBarInactiveTintColor: "#646464",
      tabBarIcon: ({ color, size }) => {
        const iconName = routes.find(r => r.tab === route.name)?.icon || 'home-outline'
        return <Icon name={iconName} size={size} color={color} />
      }
    })}
    >
      { 
        routes.map(route => (
        <Tabs.Screen 
          key={route.tab}
          name={route.tab}
          component={route.component} 
          options={{ title: route.title }}
        />))
      }
    </Tabs.Navigator>
  )

}


export default AppNavigation