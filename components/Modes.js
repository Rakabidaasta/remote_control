import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import React from "react";
import Header from './Header';
import { ShadowBox } from 'react-native-neomorph-shadows';
import ColorPaletteSmallSeq from './ColorPaletteSmallSeq';
import Mode from './Mode';
import { modeUrl1, modeUrl2 } from "../assets/endpoints"

class Modes extends React.Component {

    makeRainbow = () => {

        let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
            }
        }
        fetch(modeUrl1, data)
    }

    makeRainbowHor = () => {

        let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
            }
        }
        fetch(modeUrl2, data)
    }


    render() {
        return (
            <View style={{ paddingTop: 20, width: '98%' }}>
                <ShadowBox
                    useSvg
                    style={styles.container}>
                    <Header title="Modes" />
                    <View style={styles.modes__div}>
                        <TouchableOpacity onPress={this.makeRainbow}>
                            <Mode title="Rainbow" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.makeRainbowHor}>
                            <Mode title="Rainbow (hor.)" />
                        </TouchableOpacity>

                    </View>

                </ShadowBox >

            </View >
        );
    }

}

const styles = StyleSheet.create({
    container: {
        marginLeft: 3,
        marginRight: 5,

        borderRadius: 5,
        borderWidth: 1,

        padding: 15,
        paddingBottom: 10,

        backgroundColor: '#E4F9FF',
        borderRadius: 20,
        borderColor: 'white',

        shadowOffset: { width: 10, height: -5 },
        shadowOpacity: .25,
        shadowColor: "#000",
        shadowRadius: 3,

        height: 120,
    },

    modes__div: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
});

export default Modes;