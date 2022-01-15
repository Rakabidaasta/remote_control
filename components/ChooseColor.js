import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { CirclePicker } from 'react-color';
import { ColorPicker } from 'react-native-color-picker'

const ChooseColor = () => {

      
    return (
        <ColorPicker
    onColorSelected={color => alert(`Color selected: ${color}`)}
    style={{flex: 1}}
  />
    );
}

const styles = StyleSheet.create({  
    container: {
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#d9f7ff'
    },

    container__header: {
        fontSize: 20,
        fontWeight: '500',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 10
    },

    colors__palette: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
});

export default ChooseColor;