import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic
} from '@expo-google-fonts/open-sans'

import { ShadowBox } from 'react-native-neomorph-shadows';


const Mode = (props) => {
    let [fontsLoaded] = useFonts({
        OpenSans_300Light,
        OpenSans_300Light_Italic,
        OpenSans_400Regular,
        OpenSans_400Regular_Italic,
        OpenSans_600SemiBold,
        OpenSans_600SemiBold_Italic,
        OpenSans_700Bold,
        OpenSans_700Bold_Italic,
        OpenSans_800ExtraBold,
        OpenSans_800ExtraBold_Italic
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <View>
                <ShadowBox
                    inner
                    useSvg
                    style={styles.container}>
                    <Text style={styles.div__header}>{props.title}</Text>
                </ShadowBox>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // shadowOffset: { width: 3, height: -3 },
        // shadowOpacity: .5,
        // shadowColor: "#000",
        // shadowRadius: 5,
        // width: 10,
        height: 35,

        backgroundColor: "white",
        width: 110,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'white',
        // marginBottom: 5,
        // alignItems: 'center'
        alignItems: 'center',
        justifyContent: 'center'
    },

    div__header: {
        textAlign: 'center',
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 14,
    },
});

export default Mode;