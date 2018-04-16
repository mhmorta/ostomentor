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
import {Avatar} from '../../components';
import {GradientButton} from '../../components';

let moment = require('moment');


export class ShoppingItem extends React.Component {
  static navigationOptions = {
    title: 'Article View'.toUpperCase()
  };

  constructor(props) {
    super(props);
    let {params} = this.props.navigation.state;
    let id = params ? params.id : 1;
    this.data = data.getArticle(id);
  }

  render() {
    return (
      <ScrollView style={styles.root}>
      {/* <RkCard rkType='backImg'>
          <Image rkCardImg source={info.item.photo}/>
          <View rkCardImgOverlay rkCardContent style={styles.overlay}>
            <RkText rkType='header2 inverseColor'>{info.item.header}</RkText>
            <RkText rkType='secondary2 inverseColor'>{moment().add(info.item.time, 'seconds').fromNow()}</RkText>
            <View rkCardFooter style={styles.footer}>
              <SocialBar rkType='leftAligned'/>
            </View >
          </View>
        </RkCard> */}

        <RkCard rkType='article'>
          <Image rkCardImg source={this.data.photo}/>
          <View rkCardHeader>
            <View>
              <RkText style={styles.title} rkType='header4'>{this.data.header}</RkText>
              <RkText rkType='secondary2 hintColor'>{moment().add(this.data.time, 'seconds').fromNow()}</RkText>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileV1', {id: this.data.user.id})}>
              <Avatar rkType='circle' img={this.data.user.photo}/>
            </TouchableOpacity>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='primary3 bigLine'>{this.data.text}</RkText>
            </View>
          </View>
          <View>
            <GradientButton
            rkType='large'
            style={styles.button}
            text="Buy Item"
            onPress={() => {
              this.props.navigation.navigate('Cards');
            }}/>
          </View>
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