import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Footer from './components/Footer';
import MonoColor from './components/MonoColor';
import Sequence from './components/Sequence';
import Modes from './components/Modes';
import Gradient from './components/Gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ paddingBottom: 100 }}>
        <MonoColor />
        <Sequence />
        <Modes />
        <Gradient />
      </ScrollView>
      <View style={[styles.footer, styles.elevation]}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: 'white',
  },

  // footer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   width: '100%'
  // }
});
