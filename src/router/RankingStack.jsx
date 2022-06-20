import { createNativeStackNavigator } from "@react-navigation/native-stack"
import RankingScreen from "../screens/ranking/RankingScreen"

const Stack = createNativeStackNavigator()

const RankingStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Ranking" component={RankingScreen} options={{ title: "Ranking" }} />
  </Stack.Navigator>
)


export default RankingStack