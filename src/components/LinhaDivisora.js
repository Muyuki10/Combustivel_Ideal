import { View } from 'react-native';
import { StyleSheet} from 'react-native';

export default function LinhaDivisora(){
    return(
        <View style={styles.linha}>
        </View>
    )
}

const styles = StyleSheet.create({
    linha : {
        marginVertical: 15,
        borderBottomWidth: 3,
        borderBottomColor: '#ff0000',
        width: '100%',
    }
})