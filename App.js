/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () =>{

  return (
    <View>
      
      <StatusBar barStyle='#222'/>
      <ScrollView>
        <Text style={styles.titolRoig}>Benvinguts a React Native</Text>
        <Text style={styles.primerExercici}>Este sera el primer exercici</Text>
        <Text style={{fontFamily: "normal"},styles.tamaño}>Font Normal</Text>
        <Text style={{fontFamily: "notoserif"},styles.tamaño}>Font notoserif</Text>
        <Text style={{fontFamily: "sans-serif"},styles.tamaño}>Font sans-serif</Text>
        <Text style={{fontFamily: "sans-serif-ligth"},styles.tamaño}>Font sans-serif-ligth</Text>
        <Text style={{fontFamily: "sans-serif-thin"},styles.tamaño}>Font sans-serif-thin</Text>
        <Text style={{fontFamily: "sans-serif-condensed"},styles.tamaño}>Font sans-serif-condensed</Text>
        <Text style={{fontFamily: "sans-serif-medium"},styles.tamaño}>Font sans-serif-medium</Text>
        <Text style={{fontFamily: "serif"},styles.tamaño}>Font serif</Text>
        <Text style={{fontFamily: "Roboto"},styles.tamaño}>Font Roboto</Text>
        <Text style={{fontFamily: "monospace"},styles.tamaño}>Font monospace</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titolRoig:{
    marginTop:15,
    textAlign:"center",
    color:"red",
    fontSize:50,
    marginBottom:25,
  },
  primerExercici:{
    fontFamily:"monospace",
    color:"skyblue",
    fontWeight:"bold",
    fontSize:20,  
  },
  tamaño:{
    fontSize:20,
  },
});

export default App;
