import * as React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {FONT_FAMILY} from '@env';

export const Text = ({children, style}) => {
  return <RNText style={[style, styles.text]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY,
  },
});
