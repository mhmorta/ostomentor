import React from 'react';
import {
  View,
  Image,
  StatusBar,
  Platform
} from 'react-native';
import {
  RkText,
  RkButton,
  RkTheme,
  RkStyleSheet
} from 'react-native-ui-kitten';
import { DarkKittenTheme } from '../../config/darkTheme';
import { KittenTheme } from '../../config/theme';
import { GradientButton } from '../../components/gradientButton';
import { scale, scaleModerate, scaleVertical } from '../../utils/scale';

export class Quiz extends React.Component {
  static navigationOptions = {
    title: 'Quiz'.toUpperCase()
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <RkText>How much do you think you should take?</RkText>
          <Image style={styles.image} source={require('../../assets/images/test.png')}/>
          <GradientButton
            text='2mg'
            onPress={() => {
              this.props.navigation.navigate('SucessFailure', {id: 20 })
            }} />
          <GradientButton
            text='6mg'
            onPress={() => {
              this.props.navigation.navigate('SucessFailure', {id: 21 })
            }} />
        </View>
        {/* <View style={styles.container}>
          <RkText>Dark Theme</RkText>
          <GradientButton
            text='APPLY'
            onPress={() => {
              RkTheme.setTheme(DarkKittenTheme);
              StatusBar.setBarStyle('light-content', true);
              Platform.OS == 'android' && StatusBar.setBackgroundColor(DarkKittenTheme.colors.screen.base);
            }}/>

        </View> */}
      </View>

    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
    flex: 1,
    paddingHorizontal: scale(72),

  },
  image: {
    height: scaleVertical(250)
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scaleVertical(20)
  }
}));