
	static navigationOptions = ({ navigation }) => ({
    title: 'Home',
  	headerStyle: styles.header,
    headerTitleStyle : styles.headerText,
    headerBackTitle: null,
    headerLeft: <MenuButton navigation = {navigation} />,
    headerRight: <SettingButton navigation = {navigation} />,
    drawerLabel: 'Trang chủ',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../img/icon/home.png')}
        style={[ {tintColor: tintColor}]}
      />
    ),
  });

export default navigationOptions;