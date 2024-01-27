/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const VisuallyHidden = ({text}: {text: string}) => {
  return (
    <View style={styles.hiddenContainer}>
      <Text>{text ?? 'Visually Hidden Text'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hiddenContainer: {
    display: 'none',
  },
});

export default VisuallyHidden;
