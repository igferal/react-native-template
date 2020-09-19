import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../components/core/Text';
import {theme} from '../utils/theme';
import translate from '@locale';
export function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <Text style={{color: theme.mainColor}}>{translate('title')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
