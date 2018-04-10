import React from 'react';
import {
  View,
  Image,
  Keyboard
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard,
  RkPicker
} from 'react-native-ui-kitten';
import { GradientButton } from '../../components/';
import { scale, scaleModerate, scaleVertical } from '../../utils/scale';
import { NavigationActions } from 'react-navigation';


export class DataEntry extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = { pickedValue: '' };
  }

  render() {
    let dataDate = [
      [{ key: 1, value: 'Jun' }, { key: 2, value: 'Feb' }, { key: 3, value: 'Mar' }, { key: 4, value: 'Apr' }],
      [1, 2, 3, 4, 5],
      [2017, 2018, 2019]];
    let renderIcon = () => {
      if (RkTheme.current.name === 'light')
        return <Image style={styles.image} source={require('../../assets/images/logo.png')} />;
      return <Image style={styles.image} source={require('../../assets/images/logoDark.png')} />
    };
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={(e) => true}
        onResponderRelease={(e) => Keyboard.dismiss()}>
        <View style={{ alignItems: 'center' }}>
          {renderIcon()}
          <RkText rkType='h1'>Enter Stoma output data </RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput rkType='rounded' placeholder='Stoma output (cc)' />
            <RkTextInput rkType='rounded' placeholder='Drug1' />
            <RkTextInput rkType='rounded' placeholder='Drug2' secureTextEntry={false} />
            <RkTextInput rkType='rounded' placeholder='Date' secureTextEntry={false} />
            {/* <RkPicker
              title='Set Date'
              data={dataDate}
              // visible={this.state.pikerVisible}
              selectedOptions={this.state.pickedValue}
              onConfirm={(data) => {
                this.setState({ pickedValue: data });
                this.setState({ pikerVisible: false });
                        }}
                 onCancel={() => this.setState({ pikerVisible: false })} /> */}
            <GradientButton style={styles.save} rkType='large' text='Store Data' onPress={() => {
              this.props.navigation.goBack();
            }} />
          </View>
          {/* <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType='primary3'>Already have an account?</RkText>
              <RkButton rkType='clear'  onPress={() => this.props.navigation.dispatch(toHome)}>
                <RkText rkType='header6'> Sign in now </RkText>
              </RkButton>
            </View>
          </View> */}
        </View>
      </RkAvoidKeyboard>
    );
  }
}


let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.screen.base
  },
  image: {
    marginBottom: 10,
    height: scaleVertical(77),
    resizeMode: 'contain'
  },
  content: {
    justifyContent: 'space-between'
  },
  save: {
    marginVertical: 20
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: 'space-around'
  },
  footer: {
    justifyContent: 'flex-end'
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
}));