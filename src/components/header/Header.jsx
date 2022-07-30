import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
 } from "react-native";

 import { Feather } from '@expo/vector-icons';

export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.userName}>{ name }</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttom}>
                    <Feather name="user" size={27} color='#fff'/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        height: 100
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        paddingStart: 20,
        paddingEnd: 20
    },
    buttom: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 44/2

    },
    userName: {
        color: '#fff',
        fontSize: 22,
        fontWeight: "600"
    }
});