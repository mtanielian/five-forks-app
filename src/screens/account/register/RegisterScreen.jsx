import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Divider, Button, Input } from 'react-native-elements'
import { useFormik } from "formik";
import * as Yup from 'yup'; 
import { useDispatch, useSelector } from 'react-redux';
//import { doLogin } from '../../../actions/auth.actions';
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
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue)
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
      <View style={{ margin: 20, height: 600 }}>
      <View>
          <Input
            placeholder='Username'
            leftIcon={
              <Icon
              name='person-circle-outline'
              size={16}
              />
            }
            style={{ height: 40 }}
            onChangeText={(text) => formik.setFieldValue('username', text)}
            errorStyle={{ color: 'red' }}
            errorMessage={formik.errors.username}
            />
        </View>
        <View>
          <Input
            placeholder='Email'
            leftIcon={
              <Icon
              name='at-outline'
              size={16}
              />
            }
            style={{ height: 40 }}
            onChangeText={(text) => formik.setFieldValue("email", text)}
            errorStyle={{ color: 'red' }}
            errorMessage={formik.errors.email}
          />
        </View>
        <View>
          <Input
            placeholder='Password'
            secureTextEntry
            leftIcon={
              <Icon
              name='lock-closed-outline'
              size={16}
              />
            }
            style={{ height: 40 }}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            errorStyle={{ color: 'red' }}
            errorMessage={formik.errors.password}
          />
        </View>
        <View>
          <Input
            placeholder='Retry Password'
            leftIcon={
              <Icon
              name='lock-closed-outline'
              size={16}
              />
            }
            style={{ height: 40 }}
            onChangeText={(text) => formik.setFieldValue("retryPassword", text)}
            errorStyle={{ color: 'red' }}
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
          />
          <TouchableOpacity style={{alignItems: 'flex-end' }}>
            <Text style={{color: '#00a680' }}>Alredy account?</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default RegisterScreen