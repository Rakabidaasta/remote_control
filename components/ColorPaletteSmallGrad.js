import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import React from "react";
import ColorSmall from './ColorSmall';
import { gradUrl, monoUrl } from "../assets/endpoints"

class ColorPaletteSmallGrad extends React.Component {

    isClicked = [false, false, false, false, false, false, false, false]
    pastelColors = ["#FFAEAE", "#FFCBAE", "#FFEDAE", "#C8FFAE", "#AEFFDD", "#AEF0FF", "#AECAFF", "#C8AEFF"]
    colors = ["#ff0000", "#ff5c00", "#FFC700", "#00ff00", "#00FF94", "#00D1FF", "#0000ff", "#5200FF"]

    isChoose = [false, false, false]
    chooseColors = ["#D2D2D2", "#D2D2D2"]
    newChooseColors = []

    changeClicked = (id) => {

        for (var i = 0; i < 2; i++) {
            if (this.isChoose[i] === false) {
                this.chooseColors[i] = this.pastelColors[id]
                this.isChoose[i] = true
                break
            }
        }

        var result = []
        for (var i = 0; i < 2; i++) {
            if (this.isChoose[i]) {
                result.push(this.colors[this.pastelColors.indexOf(this.chooseColors[i])])
            } else {
                break
            }
        }
        this.forceUpdate()
        let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({
                "from_hex_color": result[0],
                "to_hex_color": result[1]
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
        fetch(gradUrl, data)

    }

    clearColor = (id) => {
        this.chooseColors[id] = "#D2D2D2"
        this.isChoose[id] = false

        var count = 0
        for (var i = 0; i < 2; i++) {
            if (this.isChoose[i]) count++;
        }

        if (count == 0) {
            let data = {
                method: 'POST',
                credentials: 'same-origin',
                mode: 'same-origin',
                body: JSON.stringify({
                    "hex_color": "00000"
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
            fetch(monoUrl, data)
        }

        this.newChooseColors = []

        for (var i = 0; i < 2; i++) {
            if (this.isChoose[i]) this.newChooseColors.push(this.chooseColors[i])
            if (i < count) this.isChoose[i] = true
            else this.isChoose[i] = false
        }

        for (count; 2 - count > 0; count++)
            this.newChooseColors.push("#D2D2D2")

        this.chooseColors = this.newChooseColors
        var result = []
        for (var i = 0; i < 2; i++) {
            if (this.isChoose[i]) {
                result.push(this.colors[this.pastelColors.indexOf(this.chooseColors[i])])
            } else {
                break
            }
        }
        this.forceUpdate()
        let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({
                "hex_colors": result
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
        fetch(gradUrl, data)
    }

    render() {
        return (

            <View>
                <View style={styles.choosen__colors}>
                    <View style={[styles.color__choose, { backgroundColor: this.chooseColors[0], borderStyle: this.isChoose[0] ? 'solid' : 'dashed' }]}>
                        {this.isChoose[0] ? <Text style={styles.clearColor} onPress={() => this.clearColor(0)}>x</Text> : <Text style={styles.notChoosen}>+</Text>}
                    </View>
                    <View style={[styles.color__choose, { backgroundColor: this.chooseColors[1], borderStyle: this.isChoose[1] ? 'solid' : 'dashed' }]}>
                        {this.isChoose[1] ? <Text style={styles.clearColor} onPress={() => this.clearColor(1)}>x</Text> : <Text style={styles.notChoosen}>+</Text>}
                    </View>
                </View>

                <View style={styles.colors__palette}>
                    <TouchableOpacity onPress={() => this.changeClicked(0)}
                        style={this.isClicked[0] ? styles.choosen : styles.nothing}>
                        <ColorSmall color="#FFAEAE" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.changeClicked(1)}
                        style={this.isClicked[1] ? styles.choosen : styles.nothing}>
                        <ColorSmall color="#FFCBAE" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.changeClicked(2)} style={this.isClicked[2] ? styles.choosen : styles.nothing}>
                        <ColorSmall color="#FFEDAE" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.changeClicked(3)} style={this.isClicked[3] ? styles.choosen : styles.nothing}>
                        <ColorSmall color="#C8FFAE" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.changeClicked(4)} style={this.isClicked[4] ? styles.choosen : styles.nothing}>
                        <ColorSmall color="#AEFFDD" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.changeClicked(5)} style={this.isClicked[5] ? styles.choosen : styles.nothing}>
                        <ColorSmall color="#AEF0FF" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.changeClicked(6)} style={this.isClicked[6] ? styles.choosen : styles.nothing}>
                        <ColorSmall color="#AECAFF" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.changeClicked(7)} style={this.isClicked[7] ? styles.choosen : styles.nothing}>
                        <ColorSmall color="#C8AEFF" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    colors__palette: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    color__choose: {
        width: 60,
        height: 60,

        justifyContent: 'center',
        alignItems: 'center',

        padding: 10,

        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#D2D2D2',
        borderStyle: 'dashed',
        borderWidth: 2,

        position: 'relative',
    },

    choosen__colors: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 50,
        marginRight: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    choosen: {
        padding: 4,
        borderRadius: 50,
        shadowColor: '#000000aa',
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 2,
    },

    nothing: {
        width: 39,
        height: 39,
    },

    notChoosen: {
        fontSize: 52,
        lineHeight: 50,
        textAlign: 'center',
        color: 'white'
    },

    clearColor: {
        fontSize: 25,
        backgroundColor: 'white',
        lineHeight: 25,
        textAlign: 'center',
        color: 'black',
        position: 'absolute',
        top: 0,
        right: 0
    }

});

export default ColorPaletteSmallGrad;