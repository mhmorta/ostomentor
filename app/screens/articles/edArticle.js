import React from 'react';
import {
  ScrollView,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet
} from 'react-native-ui-kitten';
import {data} from '../../data';
import { SocialBar } from '../../components';
import { GradientButton } from '../../components/gradientButton';

let moment = require('moment');


export class EdArticle extends React.Component {
  static navigationOptions = {
    title: 'Article'.toUpperCase()
  };

  constructor(props) {
    super(props);
    let {params} = this.props.navigation.state;
    let id = params ? params.id : 1;
    this.data = data.getEducationalArticle(id);
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        <RkCard rkType='article'>
          <Image rkCardImg source={this.data.photo}/>
          <View rkCardHeader>
            <View>
              <RkText style={styles.title} rkType='header4'>{this.data.header}</RkText>
              {/* <RkText rkType='secondary2 hintColor'>{moment().add(this.data.time, 'seconds').fromNow()}</RkText> */}
            </View>
            {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileV1', {id: this.data.user.id})}>
              <Avatar rkType='circle' img={this.data.user.photo}/>
            </TouchableOpacity> */}
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='primary3 bigLine'>{this.data.text}</RkText>
            </View>
          </View>
          <View rkCardFooter>
            < SocialBar marginBottom='5'/>
          </View>
          <GradientButton
            marginBottom='5'
            paddingHorizontal = '10'
            text='Comments'
            onPress={() => {
              this.props.navigation.navigate('Comments');
            }} />
        </RkCard>
      </ScrollView>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  title: {
    marginBottom: 5
  },
}));