import { StyleSheet, View } from 'react-native';
import React from "react";
import Header from './Header';
import { ShadowBox } from 'react-native-neomorph-shadows';
import ColorPalette from './ColorPalette';

class MonoColor extends React.Component {

  render() {
    return (
      <View style={{ paddingTop: 20, width: '98%' }}>
        <ShadowBox
          useSvg
          style={styles.container}>
          <Header title="Mono" />
          <ColorPalette />
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
    height: 185
  },

  container__header: {
    fontSize: 20,
    fontWeight: '500',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10
  }
});

export default MonoColor;