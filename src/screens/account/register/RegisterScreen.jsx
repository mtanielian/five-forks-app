import { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Divider, Button, Input } from 'react-native-elements'
import { useFormik } from "formik";
import * as Yup from 'yup'; 
import { useDispatch, useSelector } from 'react-redux';
import { doRegister } from '../../../actions/auth.actions';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'


const img = require('../../../../assets/images/five-forks-logo.png')
const initialValues = {
  username: '',
  email: '',
  password: '',
  retryPassword: ''
}

const validationSchema = Yup.object({ 
  username: Yup.string().required('Required').min(6, 'Too Short! (+5 characters)') ,
  email: Yup.string().email('Invalid email').required('Required'), 
  password: Yup.string() 
    .min(8, 'Too Short! (+7 characters)') 
    .required('Required'), 
  retryPassword: Yup.string()
    .required('Required.')
    .oneOf([Yup.ref('password')], 'Your passwords do not match.')
}); 

const RegisterScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [ showPassword, setShowPassword ] = useState(false)
  const [ showRetryPassword, setShowRetryPassword ] = useState(false)

  const goToLogin = () => {
    navigation.navigate('Login')
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue)
      dispatch(doRegister(formValue))
    },
  });

  return (
    <ScrollView centerContent>
      <Image 
        source={img} 
        style={{
          resizeMode: "contain",
          width: "100%",
          height: 100,
          marginTop: 20
        }}
      />
      <View style={{ margin: 20, height: 400 }}>
      <View>
          <Input
            placeholder='Username'
            rightIcon={
              <Icon
              name='person-circle-outline'
              size={16}
              />
            }
            style={{ height: 40 }}
            onChangeText={(text) => formik.setFieldValue('username', text)}
            errorMessage={formik.errors.username}
            />
        </View>
        <View>
          <Input
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
        <View>
          <Input
            placeholder='Retry Password'
            secureTextEntry={!showRetryPassword}
            rightIcon={
              <Icon
                name={ !showRetryPassword ? 'eye-outline' : 'eye-off-outline' }
                size={16}
                onPress={() => setShowRetryPassword(prev => !prev)}
              />
            }
            style={{ height: 40 }}
            onChangeText={(text) => formik.setFieldValue("retryPassword", text)}
            errorMessage={formik.errors.retryPassword}
          />
        </View>
        <Divider
            style={{ marginTop: 20, marginBottom: 20, }}        
        />
          <Button
            buttonStyle={{ borderWidth: 2, borderColor: '#00a680' }}
            titleStyle={{ color: '#00a680'}}
            title="Register"
            type="outline"
            onPress={formik.handleSubmit}
          />
          <TouchableOpacity style={{alignItems: 'flex-end' }} onPress={goToLogin}>
            <Text style={{color: '#00a680' }}>Alredy account?</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default RegisterScreen