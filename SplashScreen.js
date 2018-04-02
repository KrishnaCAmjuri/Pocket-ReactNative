import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class SplashScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
            dailyreads
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09091A',
  },
  titleStyle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
