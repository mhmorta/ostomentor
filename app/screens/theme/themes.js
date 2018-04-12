import React from 'react';
import {
  View,
  Image,
  StatusBar,
  Platform,
  ScrollView
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

export class Themes extends React.Component {
  static navigationOptions = {
    title: 'Theme'.toUpperCase()
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        <View style={styles.container}>
          <RkText>Light Theme</RkText>
          <View style={{ padding: 10, alignSelf: 'center' }}>
            <Image style={styles.image} source={require('../../assets/images/light.jpeg')} />
          </View>
          <GradientButton
            text='APPLY'
            onPress={() => {
              StatusBar.setBarStyle('dark-content', true);
              Platform.OS == 'android' && StatusBar.setBackgroundColor(KittenTheme.colors.screen.base);
              RkTheme.setTheme(KittenTheme);
            }} />
        </View>
        <View style={styles.container}>
          <RkText>Dark Theme</RkText>
          <View style={{ padding: 10, alignSelf: 'center' }}>
            <Image style={styles.image} source={require('../../assets/images/dark.jpeg')} />
          </View>

          <GradientButton
            text='APPLY'

            onPress={() => {
              RkTheme.setTheme(DarkKittenTheme);
              StatusBar.setBarStyle('light-content', true);
              Platform.OS == 'android' && StatusBar.setBackgroundColor(DarkKittenTheme.colors.screen.base);
            }} />

        </View>
      </ScrollView>

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
    height: scaleVertical(210),

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scaleVertical(10)
  }
}));