import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from './StyledButton';

const CarItem = props => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require ('../../assets/images/ModelX.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Tesla Z-353</Text>
        <Text style={styles.subtitle}>Starting at 2523,11$</Text>
      </View>
      <StyledButton
        type="primary"
        content={'Custom Order'}
        onPress={() => {
          console.warn ('Pressed');
        }}
      />
      <StyledButton
        type="secondary"
        content={'Existing Inventory'}
        onPress={() => {
          console.warn ('Pressed');
        }}
      />

    </View>
  );
};

export default CarItem;
