// @flow
import React from 'react'

// theme
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native'

export default class Header extends React.Component {
    render() {
      return (
        <View style={{
        alignItems: 'center',
        paddingTop: 20,}}>
          <Text style={{fontWeight: 'bold'}}>You are here: {this.props.title}</Text>
        </View>
      );
    }
  }