import { View } from 'react-native';
import { TouchableOpacity, Text} from 'react-native-web';

export default function Botao() {
    
    return(
        <View>
         <TouchableOpacity onPress={() => alert('murilo')}>
                    <Text>RESULTADO</Text>
         </TouchableOpacity>
        </View>
    )
    
}

 /*<TouchableOpacity onPress={}>
                    <Text>RESULTADO</Text>
             </TouchableOpacity>

*/