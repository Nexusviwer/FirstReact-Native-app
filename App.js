
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title/';
import Main from './src/components/Main';
import Form from './src/components/Form';

const image = { uri: "https://reactjs.org/logo-og.png" };
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 paddingTop:80,
 backgroundColor:'#faa307'
    
  },

});
