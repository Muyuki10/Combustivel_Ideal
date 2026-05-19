import { useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity, Text} from 'react-native-web';

export default function ResultCard({gasolina1 , etanol1}) {

    let message = '';
    function combustivel(gasolina, etanol) {
        if (etanol < gasolina * 0.7) {
            message = 'etanol';

            
        }else{
            message = 'gasolina';
        }
        
    }

    
    
    
    return(
        <View>
        <Text>ABASTEÇA COM : {combustivel(gasolina1,etanol1)}</Text>
        </View>
    )
    
}