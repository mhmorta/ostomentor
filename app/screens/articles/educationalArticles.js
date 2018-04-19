import React from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {
  RkText,
  RkCard, RkStyleSheet
} from 'react-native-ui-kitten';
import {SocialBar} from '../../components';
import {data} from '../../data';
let moment = require('moment');

export class EducationalArticles extends React.Component {
  static navigationOptions = {
    title: 'Educational Articles'.toUpperCase()
  };

  constructor(props) {
    super(props);

    this.data = data.getEducationalArticles();
    this.renderItem = this._renderItem.bind(this);
  }

  _keyExtractor(post, index) {
    return post.id;
  }

  _renderItem(info) {
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => this.props.navigation.navigate('EdArticle', {id: info.item.id})}>
        <RkCard rkType='imgBlock' style={styles.card}>
          <Image rkCardImg source={info.item.photo}/>

          <View rkCardImgOverlay rkCardContent style={styles.overlay}>
            <RkText rkType='header4 inverseColor'>{info.item.header}</RkText>
            {/* <RkText style={styles.time}
                    rkType='secondary2 inverseColor'>{moment().add(info.item.time, 'seconds').fromNow()}</RkText> */}
          </View>
          {/* <View rkCardFooter>
            <SocialBar rkType='space' showLabel={true}/>
          </View > */}

          {/* <GradientButton
            text='Finish'
            onPress={() => {
              this.props.navigation.navigate('GridV2');
            }} /> */}
        </RkCard>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <FlatList
        data={this.data}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
        style={styles.container}/>

    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14
  },
  card: {
    marginVertical: 8,
  },
  time: {
    marginTop: 5
  }
}));