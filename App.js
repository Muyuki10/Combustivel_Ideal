import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [ gasolina, setGasolina] = useState('');
  const [ etanol, setEtanol] = useState('');
  return (
    <View style={styles.container}>
      <Text>ALCOOL OU GASOLINA</Text>

      <Image
        source={require('./assets/posto.jpg')}
        style = {styles.imagem}
      />

      <View> 
      <Text>PREÇO ETANOL R$</Text>
      <TextInput

      placeholder='digite aqui'

      style = {styles.Input}

      value= {etanol}

      onChange={setEtanol}
      
      />


      

      </View>

      <View>
      <Text>PREÇO GASOLINA R$</Text>
      <TextInput

      placeholder='digite aqui'

      style = {styles.Input}

      value= {gasolina}

      onChange={setGasolina}
      
      />
      </View>

      <TouchableOpacity>
        <Text>RESULTADO</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imagem : {
    height: 100,
    width: 100,
  },
  Input : {
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 10,
    padding: 2
   
  }
});


/*
Existe uma regra matemática clássica:
 se o preço do litro do etanol for menor que 70% (0,7) do preço da gasolina, 
 compensa abastecer com etanol; caso contrário, a gasolina é mais vantajosa.
 Você deverá criar um app onde o usuário digita os dois valores
  e o sistema indica a melhor opção financeira.
*/
