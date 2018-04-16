import {FontIcons} from '../../assets/icons';
import * as Screens from '../../screens/index';
import _ from 'lodash';

export const MainRoutes = [
  {
    id: 'LoginMenu',
    title: 'Forum',
    icon: FontIcons.profile,
    screen: Screens.Forum,
    renderable: true,
    children: [
    ]
  },
  {
    id: 'ArticlesMenu',
    title: 'Articles',
    icon: FontIcons.article,
    // screen: Screens.ArticleMenu,
    screen: Screens.EducationalArticles,
    renderable: true,
    children: [
    ]
  },
  {
    id: 'DashboardsMenu',
    title: 'Dashboards',
    icon: FontIcons.dashboard,
    screen: Screens.DashboardMenu,
    renderable: true,
    children: [{
      id: 'Dashboard',
      title: 'Dashboard',
      screen: Screens.Dashboard,
      renderable: true,
      children: []
    },
    {
      id: 'DataEntry',
      title: 'Enter Data',
      screen: Screens.DataEntry,
      renderable: true,
      children: []
    }]
  },
  {
    id: 'MessagingMenu',
    title: 'Messaging',
    icon: FontIcons.mail,
    // screen: Screens.MessagingMenu,
    screen: Screens.ChatList,
    renderable: true,
    children: [

      {
        id: 'ChatList',
        title: 'Chat List',
        screen: Screens.ChatList,
        renderable: true,
        children: []
      },


    ]
  },
  {
    id: 'EcommerceMenu',
    title: 'Stoma Supplies',
    icon: FontIcons.card,
    screen: Screens.EcommerceMenu,
    renderable: true,
    children: [
      {
        id: 'StomaCompanies',
        title: 'Stoma Supply Companies',
        screen: Screens.StomaCompanies,
        renderable: true,
        children: []
      },
      {
        id: 'Cards',
        title: 'Cards',
        icon: FontIcons.card,
        screen: Screens.Cards,
        renderable: true,
        children: []
      },
      {
        id: 'AddToCardForm',
        title: 'Add Card Form',
        icon: FontIcons.addToCardForm,
        screen: Screens.AddToCardForm,
        renderable: true,
        children: []
      },

    ]
  },
  {
    id: 'SocialMenu',
    title: 'User Profile',
    icon: FontIcons.login,
    screen: Screens.SocialMenu,
    renderable: true,
    children: [
      {
        id: 'ProfileSettings',
        title: 'Profile Settings',
        screen: Screens.ProfileSettings,
        renderable: true,
        children: []
      },
      {
        id: 'Permissions',
        title: 'Permissions',
        screen: Screens.Permissions,
        renderable: true,
        children: []
      },
    ]
  },
  {
    id: 'WalkthroughMenu',
    title: 'Walkthroughs',
    icon: FontIcons.mobile,
    screen: Screens.WalkthroughMenu,
    renderable: false,
    children: [{
      id: 'Walkthrough',
      title: 'Walkthrough',
      screen: Screens.WalkthroughScreen,
      renderable: true,
      children: []
    }]
  },
  {
    id: 'NavigationMenu',
    icon: FontIcons.navigation,
    title: 'Navigation',
    screen: Screens.NavigationMenu,
    renderable: false,
    children: [
      {
        id: 'ShoppingItem',
        title: 'Supply Item',
        screen: Screens.ShoppingItem,
        renderable: false,
        children: []
      },
      {
        id: 'GridV1',
        title: 'Grid Menu V1',
        screen: Screens.GridV1,
        renderable: true,
        children: []
      },
      {
        id: 'GridV2',
        title: 'Grid Menu V2',
        screen: Screens.GridV2,
        renderable: true,
        children: []
      },
      {
        id: 'List',
        title: 'List Menu',
        screen: Screens.ListMenu,
        renderable: true,
        children: []
      },
      {
        id: 'Side',
        title: 'Side Menu',
        action: 'DrawerOpen',
        screen: Screens.SideMenu,
        renderable: true,
        children: []
      }
    ]
  },
  {
    id: 'Themes',
    title: 'Themes',
    icon: FontIcons.theme,
    screen: Screens.Themes,
    renderable: true,
    children: []
  },
  {
    id: 'OtherMenu',
    title: 'Settings',
    icon: FontIcons.other,
    screen: Screens.Settings,
    renderable: true,
    children: [
      {
        id: 'Settings',
        title: 'Settings',
        screen: Screens.Settings,
        children: []
      }
    ]
  
  },
  {
    id: 'Trash',
    title: 'Settings',
    icon: FontIcons.other,
    screen: Screens.Settings,
    renderable: false,
    children: [
      {
        id: 'Comments',
        title: 'Comments',
        screen: Screens.Comments,
        renderable: true,
        children: []
      },
      {
        id: 'ProfileV1',
        title: 'User Profile V1',
        screen: Screens.ProfileV1,
        renderable: true,
        children: []
      },
      {
        id: 'ProfileV2',
        title: 'User Profile V2',
        screen: Screens.ProfileV2,
        renderable: true,
        children: []
      },
      {
        id: 'ProfileV3',
        title: 'User Profile V3',
        screen: Screens.ProfileV3,
        renderable: true,
        children: []
      },
      {
        id: 'Notifications',
        title: 'Notifications',
        screen: Screens.Notifications,
        renderable: true,
        children: []
      },
      {
        id: 'Contacts',
        title: 'Contacts',
        screen: Screens.Contacts,
        renderable: true,
        children: []
      },
      {
        id: 'Feed',
        title: 'Feed',
        screen: Screens.Feed,
        renderable: true,
        children: []
      },
      {
        id: 'Chat',
        title: 'Chat',
        screen: Screens.Chat,
        renderable: false,
        children: []
      },
      {
        id: 'Articles1',
        title: 'Article List V1',
        screen: Screens.Articles1,
        renderable: true,
        children: []
      },
      {
        id: 'Articles2',
        title: 'Article List V2',
        screen: Screens.Articles2,
        renderable: true,
        children: []
      },
      {
        id: 'Articles3',
        title: 'Article List V3',
        screen: Screens.Articles3,
        renderable: true,
        children: []
      },
      {
        id: 'Articles4',
        title: 'Article List V4',
        screen: Screens.Articles4,
        renderable: true,
        children: []
      },
      {
        id: 'Blogposts',
        title: 'Blogposts',
        screen: Screens.Blogposts,
        renderable: true,
        children: []
      },
      {
        id: 'Article',
        title: 'Article',
        screen: Screens.Article,
        renderable: true,
        children: []
      },
      {
        id: 'EdArticle',
        title: 'Article',
        screen: Screens.EdArticle,
        renderable: true,
        children: []
      },
      {
        id: 'ShoppingArticle',
        title: 'Stoma Supplies list',
        screen: Screens.ShoppingArticle,
        renderable: true,
        children: []
      },
      {
        id: 'Quiz',
        title: 'Quiz',
        screen: Screens.Quiz,
        renderable: true,
        children: []
      },
      {
        id: 'SucessFailure',
        title: 'Result...',
        screen: Screens.SuccessFailure,
        renderable: true,
        children: []
      },
      {
        id: 'Login1',
        title: 'Login V1',
        screen: Screens.LoginV1,
        renderable: true,
        children: []
      },
      {
        id: 'Login2',
        title: 'Login V2',
        screen: Screens.LoginV2,
        renderable: true,
        children: []
      },
      {
        id: 'SignUp',
        title: 'Sign Up',
        screen: Screens.SignUp,
        renderable: true,
        children: []
      },
      {
        id: 'password',
        title: 'Password Recovery',
        screen: Screens.PasswordRecovery,
        renderable: true,
        children: []
      },
    ]
  },
];

let menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'GridV2',
  title: 'Start',
  screen: Screens.GridV2,
  children: []
},);

export const MenuRoutes = menuRoutes;
