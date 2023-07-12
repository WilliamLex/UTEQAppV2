import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { auth } from './Components/FireBaseconfig'
import { IniciarSesion, Google } from './Components/Botones';
import { signInWithEmailAndPassword } from 'firebase/auth'

const { width, height } = Dimensions.get('window');

//Deberia ser asi pero da errorrr
//export default function LoginInic() {
  // ...
//}
export  function LoginInic() {
  const navigation = useNavigation();
  const [correo, setCorreo] = useState(''); 
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = async ()=>{
    if(correo && contraseña){
        try{
            await signInWithEmailAndPassword(auth, correo, contraseña);
        }catch(err){
            console.log('got error: ',err.message);
        }
    }
  }



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground source={require('./src/Fondo.jpg')} resizeMode='cover' style={styles.backgroundImage}>
          <View style={styles.logoContainer}>
            <Image source={require('./src/UTEQBL.png')} resizeMode='stretch' style={styles.logoImage} />
          </View>
          <Text style={styles.title}>App</Text>
          <Text style={styles.subtitle}>Bienvenidos!</Text>
          <TextInput
            id='txtCorreo'
            placeholderTextColor='white'
            style={styles.textInput}
            placeholder='Enter Correo'
            value={correo}
            onChangeText={value=> setCorreo(value)}
           
          />

          <TextInput
            id='txtPassword'
            placeholderTextColor='white'
            style={styles.textInput}
            secureTextEntry={true}
            placeholder='Enter Contraseña'
            value={contraseña}
            onChangeText={value=> setContraseña(value)}
            
          />
          <TouchableOpacity
                onPress={handleSubmit}
                className="py-3 bg-yellow-400 rounded-xl"
            ></TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              
            </TouchableOpacity>


          <IniciarSesion onGuestLogin={handleGuestLogin} />
          <Google correo={correo} onGoogleLogin={handleGoogleLogin} />
          <TouchableOpacity onPress={handleGuestLogin}>
            <Text style={styles.guestText}>Iniciar como invitado</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Iniciar como invitado')}>
            <Text className="font-semibold text-yellow-500"> Iniciar como invitado</Text>
          </TouchableOpacity>
          <StatusBar style='auto' />
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: width * 0.7,
    height: height * 0.13,
    marginBottom: height * 0.03,
    alignItems: 'center',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: width * 0.1,
    color: 'white',
    fontWeight: 'bold',
    marginTop: height * -0.05,
  },
  subtitle: {
    fontSize: width * 0.08,
    color: 'white',
    fontWeight: 'bold',
    elevation: 14,
  },
  textInput: {
    fontSize: width * 0.05,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    padding: width * 0.03,
    borderRadius: width * 0.1,
    width: width * 0.9,
    marginTop: height * 0.025,
  },
  guestText: {
    fontSize: width * 0.045,
    color: 'white',
    marginTop: height * 0.05,
    textDecorationLine: 'underline',
  },
});

export default LoginInic;
