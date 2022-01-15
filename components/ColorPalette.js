import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from "react";
import Color from './Color';
import { monoUrl } from "../assets/endpoints"

class ColorPalette extends React.Component {

    isClicked = [false, false, false, false, false, false, false, false]
    colors = ["#ff0000", "#ff5c00", "#FFC700", "#00ff00", "#00FF94", "#00D1FF", "#0000ff", "#5200FF"]

    changeClicked = (id) => {
        for (var i = 0; i < 8; i++) {
            if (this.isClicked[i] === true && i !== id) {
                this.isClicked[i] = false
            }
        }
        console.log(id)

        this.isClicked[id] = !this.isClicked[id]
        console.log(this.isClicked[id])
        this.forceUpdate()

        let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({
                "hex_color": this.colors[id]
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
        fetch(monoUrl, data)

    }

    render() {
        return (
            <View style={styles.colors__palette}>
                <TouchableOpacity onPress={() => this.changeClicked(0)}
                    style={this.isClicked[0] ? styles.choosen : styles.nothing}>
                    <Color color="#FFAEAE" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeClicked(1)}
                    style={this.isClicked[1] ? styles.choosen : styles.nothing}>
                    <Color color="#FFCBAE" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.changeClicked(2)} style={this.isClicked[2] ? styles.choosen : styles.nothing}>
                    <Color color="#FFEDAE" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.changeClicked(3)} style={this.isClicked[3] ? styles.choosen : styles.nothing}>
                    <Color color="#C8FFAE" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.changeClicked(4)} style={this.isClicked[4] ? styles.choosen : styles.nothing}>
                    <Color color="#AEFFDD" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.changeClicked(5)} style={this.isClicked[5] ? styles.choosen : styles.nothing}>
                    <Color color="#AEF0FF" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.changeClicked(6)} style={this.isClicked[6] ? styles.choosen : styles.nothing}>
                    <Color color="#AECAFF" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.changeClicked(7)} style={this.isClicked[7] ? styles.choosen : styles.nothing}>
                    <Color color="#C8AEFF" />
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    colors__palette: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    choosen: {
        marginRight: 10,
        marginLeft: 6,
        padding: 4,
        borderRadius: 50,
        shadowColor: '#000000aa',
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 2,
    },

    nothing: {
        width: 59,
        height: 48,
        margin: 5,
        marginLeft: 10,
        marginRight: 6
    }

});

export default ColorPalette;