import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Settings extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        const { navigation } = this.props

        return (
            <View>
                <Text> Settings PAGE </Text>
            </View>
        )
    }
}

export default Settings