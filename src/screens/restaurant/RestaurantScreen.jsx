import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

const RestaurantScreen = () => {
  const { user } = useSelector(state => state.auth)
  return (
    <View>
      <Text>
        {JSON.stringify(user, null, 4)}
      </Text>
    </View>
  )
}

export default RestaurantScreen