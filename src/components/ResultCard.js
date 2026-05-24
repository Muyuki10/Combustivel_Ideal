import { useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function ResultCard({gasolina1 , etanol1}) {

    
    function combustivel(gasolina, etanol) {

        if (!gasolina || !etanol) return 'informe os preços para calcular';
        if (etanol < gasolina * 0.7) {
            return 'etanol';

            
        }else{
            return 'gasolina';
        }
        
    }

    
    
    
    return(
        <View style={styles.container}>
        <Text style={styles.texto}>ABASTEÇA COM :</Text>
        <Text style={styles.escolha}>{combustivel(gasolina1, etanol1)}</Text>
        <Text style={styles.texto}>o etanol esta a {((etanol1/gasolina1) * 100).toFixed(1)}% do preço da gasolina</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 5,
        backgroundColor: '#fbff00',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#ff2323',
        alignItems: 'center',
        width: '80%',

    },
    texto: {
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'center',
        letterSpacing: 1,

    },
    escolha : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff0000',
        textTransform: 'uppercase',
    }
})