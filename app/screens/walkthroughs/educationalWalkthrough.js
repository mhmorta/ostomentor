import React from 'react';
import {
  View
} from 'react-native';
import {RkStyleSheet} from 'react-native-ui-kitten';
import {GradientButton} from '../../components/';
import {Walkthrough} from '../../components/walkthrough';
import {Walkthrough1} from './walkthrough1';
import {Walkthrough2} from './walkthrough2';
import {PaginationIndicator} from '../../components';
import {NavigationActions} from 'react-navigation';
import { Article } from '../articles';

export class EducationalWalkthrough extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  changeIndex(index) {
    this.setState({index})
  }

  render() {
    return (
      <View style={styles.screen}>
        <Walkthrough onChanged={(index) => this.changeIndex(index)}>
          <Article />
          <Article />
        </Walkthrough>
        <PaginationIndicator length={2} current={this.state.index}/>
        <GradientButton
          rkType='large'
          style={styles.button}
          text="Get Started (En)"
          onPress={() => {
            this.props.navigation.dispatch(toHome)
          }}/>
          <GradientButton
          rkType='large'
          style={styles.button}
          text="Commencer (Fr)"
          onPress={() => {

            this.props.navigation.dispatch(toHome)
            //this.props.navigation.goBack()
          }}/>
      </View>
    )
  }
}
let toHome = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Third'})]
});

let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    paddingVertical: 28,
    alignItems: 'center',
    flex: 1,
  },
  button: {
    marginTop: 25,
    marginHorizontal: 16,
  }
}));