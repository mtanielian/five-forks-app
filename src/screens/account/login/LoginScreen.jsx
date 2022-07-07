import { useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native'
import { Divider, Button, Input } from 'react-native-elements'
import { useFormik } from "formik";
import * as Yup from 'yup'; 
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux';
import { doLogin } from '../../../actions/auth.actions';
import { useNavigation } from '@react-navigation/native';
 

const img = require('../../../../assets/images/five-forks-logo.png')

const initialValues = { email: '', password: '' }
const validationSchema = Yup.object({ 
   email: Yup.string().email('Invalid email').required('Required'), 
   password: Yup.string() 
     .min(8, 'Too Short!') 
     .required('Required'), 
 }); 
 
 
const LoginScreen = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.auth)
  const navigation = useNavigation()
  const [ showPassword, setShowPassword ] = useState(false)
  const goToRegister = () => {
    navigation.navigate('Register')
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      dispatch(doLogin(formValue))
    },
  });
  

  if (loading) {
    return <><Text>Cargando usuario......</Text></>
  }

  return (
    <ScrollView centerContent >
        <Image 
          source={img} 
          style={{
            resizeMode: "contain",
            width: "100%",
            height: 150,
            marginTop: 20
          }}
        />
        <View style={{ margin: 20, height:400 }}>
          <View>
            <Input
              type='email'
              placeholder='Email'
              rightIcon={
                <Icon
                  name='at-outline'
                  size={16}
                />
              }
              style={{ height: 40 }}
              onChangeText={(text) => formik.setFieldValue("email", text)}
              errorMessage={formik.errors.email}
            />
          </View>
          <View>
            <Input
              placeholder='Password'
              secureTextEntry={!showPassword}
              rightIcon={
                <Icon
                  name={ !showPassword ? 'eye-outline' : 'eye-off-outline' }
                  size={16}
                  onPress={() => setShowPassword(prev => !prev)}
                />
              }
              style={{ height: 40 }} 
              onChangeText={(text) => formik.setFieldValue("password", text)}
              errorMessage={formik.errors.password}
            />
          </View>
          
          <Button
            title="Login"
            onPress={formik.handleSubmit}
            buttonStyle={{ borderWidth: 2, borderColor: '#00a680', backgroundColor: '#00a680', marginBottom: 10, marginTop:20 }}
            titleStyle={{ color: '#ffffff'}}
          />
          <Divider
            orientation="horizontal"
            color='blue'
            style={{ marginTop: 20, marginBottom: 20, }}
          />
          <Button
            buttonStyle={{ borderWidth: 2, borderColor: '#00a680' }}
            titleStyle={{ color: '#00a680'}}
            title="Register"
            onPress={goToRegister}
            type="outline"
          />
          
        </View>
    </ScrollView>
  )
}

export default LoginScreen