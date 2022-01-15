import { StyleSheet, View, TouchableOpacity } from 'react-native';

const Color = (props) => {
    return (
        <View style={[styles.color__div, { backgroundColor: props.color }]}>
        </View>
    );
}

const styles = StyleSheet.create({
    color__div: {
        width: 40,
        height: 40,

        justifyContent: 'center',
        alignItems: 'center',

        padding: 10,

        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#fff',
    }
});

export default Color;