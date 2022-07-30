import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

import Header from '../../components/header/Header';
import Balance from '../../components/balance/Balance';
import Footer from '../../components/footers/Footer';

export default class HomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Balance></Balance>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  text: {
    color: '#000'
  }
});