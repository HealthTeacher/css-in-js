import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

const ReactNativeWeb = props => (
  <View style={styles.container}>
    <Text style={styles.title}>Hello, World!</Text>
    <Text style={styles.body}>I am Body.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    padding: '1rem',
  },
  title: {
    color: 'white',
    fontSize: '2em',
    fontWeight: 'bold',
    margin: 0,
  },
  body: { color: 'red' }
});

export default ReactNativeWeb;
