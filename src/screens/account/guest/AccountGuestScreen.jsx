import {Image, Text, ScrollView, Button  } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";
import { Divider } from 'react-native-elements';

const img = require("../../../../assets/images/user-guest.png")

const AccountGuestScreen = () => {
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate("Login")
  }

  return (
    <ScrollView centerContent={true} style={styles.container}>
      <Image 
        style={styles.image}
        source={img} 
      />
      <Text style={styles.title}>Consultar tu perfil de 5 Tenedores</Text>
      <Text style={styles.description}>
        ¿Como describirías tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te ha gustado más y
        comenta como ha sito tu experiencia.
      </Text>

      <Button
        title="Ver tu perfil"
        onPress={goToLogin}
        color="#00a680"
      />
    </ScrollView>
  )
}

export default AccountGuestScreen