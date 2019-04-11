// import librairies

import React from 'react';
import { Text, View } from 'react-native';

// create component

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
   <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View> 
  );
};

const styles = {
  viewStyle: {
      backgroundColor: '#F0F0F0',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 20 },
      shawdowOpacity: 0.5,
      elevation: 5,
      position: 'relative'
  },
  textStyle: {
fontSize: 50

  }
};
// Make the component available for the other parts of the app

export default Header;
