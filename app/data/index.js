import populate from './dataGenerator';
import users from './raw/users';
import articles from './raw/articles';
import companies from './raw/companies';
import educational from './raw/educationalArticles';
import notifications from './raw/notifications';
import conversations from './raw/conversations';
import cards from './raw/cards';
import _ from 'lodash';

class DataProvider {

  getUser(id = 2) {
    return _.find(users, x => x.id == id);
  }

  getUsers() {
    return users;
  }

  getNotifications() {
    return notifications;
  }

  getArticles(type = 'article') {
    return _.filter(articles, x => x.type == type);
  }

  getEducationalArticles(type = 'educational') {
    return _.filter(educational, x => x.type == type);
  }

  getGoods(type = 'goods') {
    return _.filter(articles, x => x.type == type);
  }
  getCompanies(type = 'company') {
    return _.filter(companies, x => x.type == type);
  }

  getArticle(id) {
    return _.find(articles, x => x.id == id);
  }

  getEducationalArticle(id) {
    return _.find(educational, x => x.id == id);
  }


  getConversation(userId = 1) {
    return _.find(conversations, x => x.withUser.id == userId);
  }

  getChatList() {
    return conversations;
  }

  getComments(postId = 1) {
    return this.getArticle(postId).comments;
  }

  getCards() {
    return cards;
  }

  populateData() {
    populate();
  }
}

export let data = new DataProvider();