import React from 'react';
import {
  View,
  Keyboard,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkAvoidKeyboard
} from 'react-native-ui-kitten';
import { GradientButton, RkSwitch } from '../../components/';
import { PasswordTextInput } from '../../components/passwordTextInput';
import { DatePicker } from '../../components/picker/datePicker';
import { CardInput } from '../../components/cardInput';
import { scale } from '../../utils/scale';

export class DataEntry extends React.Component {
  static navigationOptions = {
    title: 'Stoma Output'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      stomaOutput: 0,
      nameOnCard: '',
      cardCode: '',
      expireYear: 2018,
      expireMonth: 4,
      expireDay: 11,
      pickerVisible: false,
      metamucil: false,
      loperamide: false,
      lomotil: false
    };
  }

  handlePickedDate(date) {
    console.log(date);
    this.setState({ expireMonth: date.month.key, expireYear: date.year });
    this.hidePicker()
  }

  hidePicker() {
    this.setState({ pickerVisible: false });
  }

  render() {
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={(e) => true}
        onResponderRelease={(e) => Keyboard.dismiss()}>
        <ScrollView style={styles.screen}>
          <View style={[styles.formContent]}>
            <View>
              <View>
                <View style={[styles.textRow]}>
                  <RkText rkType='subtitle'>How much was your stoma output today? (cc) </RkText>
                </View>
                <RkTextInput rkType='rounded'
                  onChangeText={(stomaOutput) => this.setState({ stomaOutput })}
                  value={this.state.stomaOutput} />
              </View>

              <View style={[styles.content]}>
                <View style={[styles.textRow]}>
                  <RkText rkType='subtitle'>Date</RkText>
                </View>
                <View style={[styles.expireDateBlock]}>
                  <DatePicker
                    onConfirm={(date) => this.handlePickedDate(date)}
                    onCancel={() => this.hidePicker()}
                    selectedYear={this.state.expireYear}
                    selectedMonth={this.state.expireMonth}
                    selectedDay={this.state.expireDay}
                    visible={this.state.pickerVisible}
                    customDateParts={[DatePicker.DatePart.YEAR, DatePicker.DatePart.MONTH, DatePicker.DatePart.DAY]} />
                  <View style={[styles.expireDateInput, styles.balloon]}>
                    <TouchableOpacity onPress={() => this.setState({ pickerVisible: true })}>
                      <RkText rkType='medium' style={styles.expireDateInnerInput}>
                        {this.state.expireMonth}
                      </RkText>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.expireDateDelimiter]} />
                  <View style={[styles.expireDateInput, styles.balloon]}>
                    <TouchableOpacity onPress={() => this.setState({ pickerVisible: true })}>
                      <RkText rkType='medium' style={styles.expireDateInnerInput}>
                        {this.state.expireDay}
                      </RkText>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.expireDateDelimiter]} />
                  <View style={[styles.expireDateInput, styles.balloon]}>
                    <TouchableOpacity onPress={() => this.setState({ pickerVisible: true })}>
                      <RkText rkType='medium' style={styles.expireDateInnerInput}>
                        {this.state.expireYear}
                      </RkText>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>



            <View style={styles.row}>
              <RkText rkType='header6'>Metamucil</RkText>
              <RkSwitch style={styles.switch}
                value={this.state.metamucil}
                name="Metamucil"
                onValueChange={(metamucil) => this.setState({ metamucil })} />
              <RkText rkType='header6'>Loperamide</RkText>
              <RkSwitch style={styles.switch}
                value={this.state.loperamide}
                name="Loperamide"
                onValueChange={(metamucil) => this.setState({ loperamide })} />
              <RkText rkType='header6'>Lomotil</RkText>
              <RkSwitch style={styles.switch}
                value={this.state.lomotil}
                name="Lomotil"
                onValueChange={(lomotil) => this.setState({ lomotil })} />
            </View>

            <View style={[styles.content]}>
              <View style={[styles.textRow]}>
                <RkText rkType='subtitle'>Name On Card</RkText>
              </View>
              <RkTextInput rkType='rounded'
                onChangeText={(nameOnCard) => this.setState({ nameOnCard })}
                value={this.state.nameOnCard} />
            </View>

            <View style={[styles.content]}>
              <View style={[styles.textRow]}>
                <RkText rkType='subtitle'>Card Code</RkText>
              </View>
              <PasswordTextInput maxLength={3}
                keyboardType='numeric'
                onChangeText={(cardCode) => this.setState({ cardCode })}
                value={this.state.cardCode} />
            </View>
          </View>
        </ScrollView>
        <View>
          <GradientButton rkType='large' text='ADD TO CARD' onPress={() => {
            this.props.navigation.goBack()
          }} />
        </View>

      </RkAvoidKeyboard >
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 15,
    flex: 1,
    backgroundColor: theme.colors.screen.base
  },
  content: {
    marginTop: 10
  },
  formContent: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1
  },
  textRow: {
    marginLeft: 20
  },
  expireDateBlock: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  expireDateInput: {
    flex: 0.48,
    marginVertical: 10,
  },
  expireDateInnerInput: {
    textAlign: 'center'
  },
  expireDateDelimiter: {
    flex: 0.04
  },
  switch: {
    marginVertical: 14
  },
  balloon: {
    maxWidth: scale(250),
    padding: 15,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: theme.colors.border.solid,
  },
}));