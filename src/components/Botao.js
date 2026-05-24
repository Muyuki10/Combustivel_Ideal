import { View } from 'react-native';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';



export default function Botao({aoClicar}) {
    
    return(
        <View>
         <TouchableOpacity onPress={aoClicar} style={styles.botao}>
                    <Text style={styles.texto}>CALCULAR</Text>
         </TouchableOpacity>
        </View>
    )
    
}
const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#fbff00',
        borderWidth: 2,
        borderColor: '#ff2323',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    texto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    }
});
 /*<TouchableOpacity onPress={}>
                    <Text>RESULTADO</Text>
             </TouchableOpacity>

*/