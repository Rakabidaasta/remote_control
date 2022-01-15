import { StyleSheet, Text, View, Button, Image } from 'react-native';
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

const Footer = () => {
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
            <View style={styles.footer}>
                <Text style={styles.footer__text}>Remote Control</Text>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/settings.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {

        padding: 15,
        paddingLeft: 20,
        paddingRight: 20,

        marginLeft: 5,
        marginRight: 5,

        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderLeftWidth: 2,
        borderColor: 'white',
        borderRightWidth: 2,
        borderTopWidth: 2,

        backgroundColor: '#A9FFF5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    tinyLogo: {
        width: 30,
        height: 30,
    },

    footer__text: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 20,
        color: '#505050',
        fontSize: 24
    }
});

export default Footer;