import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ onButtonPress, label, btnBackgroundColor ,textColor}) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onButtonPress} style={[buttonStyle, btnBackgroundColor]}>
      <Text style={[textStyle,textColor]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 14,
    fontWeight: '700'
  },
  buttonStyle: {
    alignSelf: 'stretch',
    borderRadius: 2,
    borderWidth: 0,
    borderColor: '#38D9E7',
    height: 30,
    padding: 10,
    backgroundColor: '#38D9E7',
    justifyContent: 'center'
  }
};

export default CustomButton;