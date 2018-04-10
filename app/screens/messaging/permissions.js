import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal
} from 'react-native';
import _ from 'lodash';
import {
  RkStyleSheet,
  RkText,
  RkTextInput,
  RkButton
} from 'react-native-ui-kitten';
import { Avatar, RkSwitch } from '../../components';
import { FontAwesome } from '../../assets/icons';
import { data } from '../../data';
import { UIConstants } from '../../config/appConstants';
import { scale, scaleModerate, scaleVertical } from '../../utils/scale';

// let moment = require('moment');

export class Permissions extends React.Component {
  static navigationOptions = {
    title: 'Permissions'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.renderHeader = this._renderHeader.bind(this);
    this.renderItem = this._renderItem.bind(this);
    this.state = {
      sendPush: false,
      data: [],
      modalVisible: false
    };
  }

  componentDidMount() {
    this.chats = data.getChatList();
    this.setState({
      data: this.chats
    });
  }

  _filter(text) {
    let pattern = new RegExp(text, 'i');
    let chats = _.filter(this.chats, (chat) => {

      if (chat.withUser.firstName.search(pattern) != -1
        || chat.withUser.lastName.search(pattern) != -1)
        return chat;
    });

    this.setState({ data: chats });
  }

  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  _keyExtractor(item, index) {
    return item.withUser.id;
  }

  _renderSeparator() {
    return (
      <View style={styles.separator} />
    )
  }

  _renderHeader() {
    return (
      <View style={styles.searchContainer}>
        <RkTextInput autoCapitalize='none'
          autoCorrect={false}
          onChange={(event) => this._filter(event.nativeEvent.text)}
          label={<RkText rkType='awesome'>{FontAwesome.search}</RkText>}
          rkType='row'
          placeholder='Search' />
      </View>
    )
  }

  _renderItem(info) {
    let name = `${info.item.withUser.firstName} ${info.item.withUser.lastName}`;
    let last = info.item.messages[info.item.messages.length - 1];
    return (
      <TouchableOpacity onPress={() =>  { this._setModalVisible(true);
                                         }  }>
        <View style={styles.container}>
          <Avatar rkType='circle' style={styles.avatar} img={info.item.withUser.photo} />
          <View style={styles.content}>
            <View style={styles.contentHeader}>
              <RkText rkType='header5'>{name}</RkText>
              {/* <RkText rkType='secondary4 hintColor'>
                {moment().add(last.time, 'seconds').format('LT')}
              </RkText> */}
              <RkSwitch style={styles.switch}
                value={this.state.sendPush}
                name="Push"
                onPress={
                  () => this._setModalVisible(true) 
                }
                onValueChange={(sendPush) => {
                  this.setState({ sendPush });
                }} />

            </View>
            {/* <RkText numberOfLines={2} rkType='primary3 mediumLine' style={{paddingTop: 5}}>{last.text}</RkText> */}
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      // <View style={styles.root}>
        <FlatList
          style={styles.root}
          data={this.state.data}
          extraData={this.state}
          ListHeaderComponent={this.renderHeader}
          ItemSeparatorComponent={this._renderSeparator}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem} />
        /* <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this._setModalVisible(true)}
          visible={this.state.modalVisible}>
          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <View style={styles.popupContent}>
                <RkText style={styles.popupHeader} rkType='header4'>Are you sure?</RkText>
              </View>
              <View style={styles.popupButtons}>
                <RkButton onPress={() => { this._setModalVisible(false); }}
                  style={styles.popupButton}
                  rkType='clear'>
                  <RkText rkType='light'>CANCEL</RkText>
                </RkButton>
                <View style={styles.separator} />
                <RkButton onPress={() => { this._setModalVisible(false); this.props.navigation.goBack(); }}
                  style={styles.popupButton}
                  style={styles.popupButton}
                  rkType='clear'>
                  <RkText>OK</RkText>
                </RkButton>
              </View>
            </View>
          </View>
        </Modal> */
      // </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  searchContainer: {
    backgroundColor: theme.colors.screen.bold,
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 60,
    alignItems: 'center'
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingBottom: 12,
    paddingTop: 7,
    flexDirection: 'row'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  popup: {
    backgroundColor: theme.colors.screen.base,
    marginTop: scaleVertical(70),
    marginHorizontal: 37,
    borderRadius: 7
  },
  popupOverlay: {
    backgroundColor: theme.colors.screen.overlay,
    flex: 1,
    marginTop: UIConstants.HeaderHeight
  },
  popupContent: {
    alignItems: 'center',
    margin: 16
  },
  popupHeader: {
    marginBottom: scaleVertical(45)
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: theme.colors.border.base
  },
  popupButton: {
    flex: 1,
    marginVertical: 16
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.border.base
  },
  switch: {
    marginVertical: 14
  }
}));