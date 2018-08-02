import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Rewards extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        const { navigation } = this.props

        return (
            <View>
                <Text> REWARDS PAGE </Text>
            </View>
        )
    }
}

export default Rewards