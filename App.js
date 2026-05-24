import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import Botao from './src/components/Botao';
import ResultCard from './src/components/ResultCard';
import LinhaDivisora from './src/components/LinhaDivisora';


export default function App() {

  const [ gasolina, setGasolina] = useState('');
  const [ etanol, setEtanol] = useState('');
  const [mostrarResultado, setMostraResultado] = useState(false);

  const calcular = () => {
    setMostraResultado(true);
  };


  return (
    <View style={styles.container}>
      
      <Text style={styles.textTop}>ALCOOL OU GASOLINA</Text>

      <LinhaDivisora/>

      <Image
        source={require('./assets/posto.jpg')}
        style = {styles.imagem}
      />

      <View style={styles.blocoInput}> 
      <Text style={styles.label}>PREÇO ETANOL R$</Text>
      <TextInput

      placeholder='digite aqui'

      style = {styles.Input}

      

      onChangeText={(texto) => {
        setEtanol(texto)
        setMostraResultado(false)


      }}
      value= {etanol}
      />


      

      </View>

      <View style={styles.blocoInput}>
          <Text style={styles.label}>PREÇO GASOLINA R$</Text>
          <TextInput

                placeholder='digite aqui'

                style = {styles.Input}

                value= {gasolina}

                onChangeText={(texto) => {

                  setGasolina(texto)
                  setMostraResultado(false)
                }}
              
          />
      </View>

      <Botao aoClicar={calcular}></Botao>


     {mostrarResultado && 
     (<ResultCard 
      gasolina1={gasolina} 
      etanol1={etanol}
      />

     )}



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff200e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem : {
    height: 100,
    width: 100,
    marginBottom: 10,
    
  },
  Input : {
    borderWidth: 2,
    borderColor:'#ff2323',
    borderRadius: 10,
    padding: 5,
    fontSize: 16,
    width: '100%',
    backgroundColor: '#ffffff',
   
  },
  textTop :{
    height: 30,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    letterSpacing: 1,

  },
  label :{
    fontWeight: 'bold',
    marginBottom: 5,
  },
  blocoInput : {
    width: '80%',
    marginVertical: 8,
  },
  


});


/*
Existe uma regra matemática clássica:
 se o preço do litro do etanol for menor que 70% (0,7) do preço da gasolina, 
 compensa abastecer com etanol; caso contrário, a gasolina é mais vantajosa.
 Você deverá criar um app onde o usuário digita os dois valores
  e o sistema indica a melhor opção financeira.
*/
