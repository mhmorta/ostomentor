import React from 'react';
import {
  Image,
  View
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';

export class Walkthrough1 extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    let image = RkTheme.current.name === 'light'
      ? <Image source={require('../../assets/images/kittenImage.png')}/>
      : <Image source={require('../../assets/images/kittenImageDark.png')}/>;

    return (
      <View style={styles.screen}>
        {/* <RkText rkType='header2' style={styles.text}>Welcome to</RkText> */}
        {image}
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    marginTop: 20
  }
}));