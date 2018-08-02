import React, { Component } from 'react'
import { Text, View } from 'react-native'

class History extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        const { navigation } = this.props

        return (
            <View>
                <Text> HISTORY PAGE </Text>
            </View>
        )
    }
}

export default History