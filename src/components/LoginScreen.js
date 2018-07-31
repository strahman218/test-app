import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground , Image} from 'react-native';
import { Colors, Images } from '../Themes'
import styles from '../Styles/appStyle'

export default class LoginScreen extends Component {
    constructor(props){
        super(props);
        const {navigation} = props;
        this.state = {
            navigation: navigation,
            first_name: '',
            last_name: '',
            email: '',
            picture_url: ''
        }
    }
  //not a great name, think of something better? register? enter???
  signIn(loginType){
    //should be either FbLogin, SignUp, or SignIn
    console.log("this is the sign in type")
    console.dir(loginType)

  }

  render() {
    return (
      <ImageBackground source={Images.loginSparkler} style={styles.backgroundImage}>
        <View style={styles.contentWrapper}>
          <Image resizeMode='contain' source={Images.upsideLogoWhite} style={styles.upsideLogo} />
          <View style={styles.connectWrapper}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity onPress={() => this.signIn('fbLogin')} style={[styles.button, styles.buttonSecondary]}>
                <Text style={[styles.buttonText, styles.buttonTextSecondary]}>CONNECT WITH FACEBOOK</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { this.signIn('signUp') }} style={[styles.button, styles.buttonPrimary]}>
                <Text style={[styles.buttonText, styles.buttonTextPrimary]}>SIGN UP</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { this.signIn('login') }} style={[styles.button, styles.buttonTertiary]}>
                <Text style={[styles.buttonTextPrimary]}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.facebookNotice}>We will never post to Facebook without your permission</Text>
          </View>
        </View>
        <View style={styles.termsWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('WebContent', {title: 'Terms of Service', uri: 'https://assets.myupside.com/static/termsOfService.htm'})}>
            <Text style={styles.terms}>Terms</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('WebContent', {title: 'Privacy Policy', uri: 'https://assets.myupside.com/static/privacyPolicy.htm'})}>
            <Text style={styles.terms}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>      
      </ImageBackground>
    );
  }
}
