import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ImageBackground , Image, Button, ScrollView} from 'react-native';
import { TextField } from 'react-native-material-textfield'
import { Colors } from '../Themes'

export default class SignUpScreen extends Component { 
//   constructor(props){
//     super(props);
//     const { navigation } = this.props;
//     console.log("these are the props")
//     console.dir(this.props)
        
//     const loginType = navigation.getParam('type', 'signIn');

    // this.state = {
    //     navigation: navigation,
    //     first_name: '',
    //     last_name: '',
    //     email: '',
    //     picture_url: '',
    // }
// }


    render(){
        const { navigation } = this.props
        const loginType = navigation.getParam('type', 'signIn')
        return (
            <ScrollView>
                <Button onPress={() => navigation.goBack()} title="Go BAck"></Button>
            
                <TextField
                autoCorrect={false}
                returnKeyType='done'
                autoCapitalize='none'
                //error={this.state.emailError}
                errorColor={Colors.monza}
                keyboardType='email-address'
                label='Email Address'
                tintColor={Colors.primary}
              //   value={this.state.fields.email}
               // onChangeText={(text) => this.updateStateField('email', text.trim())}
              //   onBlur={() => {
              //     this.setState({
              //       emailError: validate('email', this.state.fields.email)
              //     })
              //   }}
              />
              <TextField
                autoCorrect={false}
                returnKeyType='done'
                //error={this.state.firstNameError}
                errorColor={Colors.monza}
                label='First Name'
                tintColor={Colors.primary}
                //value={this.state.fields.firstName}
               // onChangeText={(text) => this.updateStateField('firstName', text)}
              //   onBlur={() => {
              //     this.setState({
              //       firstNameError: validate('firstName', this.state.fields.firstName)
              //     })
              //   }}
              />
              <TextField
                autoCorrect={false}
                returnKeyType='done'
              //   error={this.state.lastNameError}
              //   errorColor={Colors.monza}
                label='Last Name'
                tintColor={Colors.primary}
              //   value={this.state.fields.lastName}
              //   onChangeText={(text) => this.updateStateField('lastName', text)}
              //   onBlur={() => {
              //     this.setState({
              //       lastNameError: validate('lastName', this.state.fields.lastName)
              //     })
              //   }}
              />
              <TextField
                autoCorrect={false}
                returnKeyType='done'
               // secureTextEntry={!this.state.passwordVisible}
              //   error={this.state.passwordError}
              //   errorColor={Colors.monza}
                label='Password'
                tintColor={Colors.primary}
              //   value={this.state.fields.password}
                title='Must be at least 10 characters'
              //   onChangeText={(text) => this.updateStateField('password', text)}
              //   renderAccessory={() => this.renderPasswordViewer()}
              //   onBlur={() => {
              //     this.setState({
              //       passwordError: validate('password', this.state.fields.password)
              //     })
              //   }}
              />
              <TextField
                autoCorrect={false}
                returnKeyType='done'
              //   secureTextEntry={!this.state.retypePasswordVisible}
              //   error={this.state.retypePasswordError}
              //   errorColor={Colors.monza}
                label='Re-enter Password'
                tintColor={Colors.primary}
              //   value={this.state.fields.retypePassword}
              //   onChangeText={(text) => this.updateStateField('retypePassword', text)}
              //   renderAccessory={() => this.renderPasswordViewer('retypePasswordVisible')}
              //   onBlur={() => {
              //     this.setState({
              //       retypePasswordError: this.state.fields.password !== this.state.fields.retypePassword ? 'Passwords must match' : null
              //     })
              //   }}
              />

              <Button title="All Set!" onPress={() => navigation.navigate('Home')} />
              
            
           
            </ScrollView>
        )
    }
}
