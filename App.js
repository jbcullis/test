import React from 'react';
import type {Node} from 'react';
import {
  View,
  TextInput
} from 'react-native';

const App: () => Node = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <TextInput style={{width: 300, height: 40, backgroundColor: 'blue'}} value={'...'} />

      <View style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: '#000000', opacity: .5}}>

      </View>

    </View>
  );
};

export default App;
