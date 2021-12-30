import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import Header from './src/components/Header/Header';
import List from './src/components/Body/List';

// State
import State from './src/context/state';

export default function App() {

  // Local state 
  const [ variantList, setVariantList ] = useState('New');

  return (
    <State>
      <View style={ styles.container }>
        <Text style={ styles.text }>reddit/r/progaming</Text>
        <Header variantList={ variantList } setVariantList={ setVariantList } />
        <List variantList={ variantList } setVariantList={ setVariantList } />
      </View>
    </State>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30
  },
  text: {
    padding: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});
