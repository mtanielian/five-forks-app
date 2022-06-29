import { Controller, useForm } from 'react-hook-form'
import { ScrollView, Button,  View, Text, Image, TextInput } from 'react-native'
import { Divider, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'


const img = require('../../../../assets/images/five-forks-logo.png')

const LoginScreen = () => {
  const { register, handleSubmit, watch, formState: { errors }, getValues, control } = useForm();
  
  const onSubmit = (form) => {
    console.log(getValues('password2'))
    console.log('hohhohooho')
    console.log(form)
  }
  
  
  const onChange = args => {
    return {
      value: args[0].nativeEvent.text,
    };
  };
  
  const goToRegister = () => {}



  return (
    <ScrollView centerContent={true} >
        <Image source={img} style={{resizeMode: "contain",
          resizeMode: "contain",
          width: "100%",
          height: 150,
          marginTop: 20,}}
        />
        <View style={{ margin: 20, height:400 }}>

        <Controller
        as={<TextInput />}
        control={control}
        name="firstName"
        onChange={onChange}
        rules={{ required: true }}
        defaultValue=""
      />

<Button title="Submit" onPress={handleSubmit((data) => console.log(data))} />

          <View>
            <Input
              placeholder='Email'
              errorStyle={{ color: 'red' }}
              errorMessage='Email is required'
              leftIcon={
                <Icon
                  name='at-outline'
                  size={16}
                />
              }
              style={{ 
                height: 40, 
                           
              }}
              {...register("email")}
            />
          </View>
          <View>
            <TextInput
              placeholder='Password'
              secureTextEntry={true}
              errorStyle={{ color: 'red' }}
              errorMessage='Password is required'
              {...register("password2")}
              value={getValues('password')}
            />
          </View>
          <View>
            <Input
              placeholder='Password'
              errorStyle={{ color: 'red' }}
              errorMessage='Password must be at least 6 characters'
              secureTextEntry
              leftIcon={
                <Icon
                  name='lock-closed-outline'
                  size={16}
                />
              }
              style={{ height: 40 }} 
              value='asdddddd12313'
              {...register("password")}
            />
          </View>
          {/*
          <Button
            title="Login"
            buttonStyle={{marginBottom: 10}}
            onPress={() => {console.log('hola'); handleSubmit(onSubmit) }}
          />
          <Divider
            orientation="horizontal"
            color='blue'
            style={{ marginTop: 20, marginBottom: 20, }}
          />

          <Button
            icon={<Icon name='logo-facebook' color='white' size={20} style={{ marginRight: 15}} />}
            title="Login with Facebook"
            buttonStyle={{marginBottom: 10}}
          />
          <Button
            buttonStyle={{ borderWidth: 2}}
            title="Register"
            onPress={goToRegister}
            type="outline"
            color="#00a680"
          />*/}
          <Button
          onPress={handleSubmit(onSubmit)}
          title="Submit"
          color="#841584"
        />
          
        </View>
    </ScrollView>
  )
}

export default LoginScreen