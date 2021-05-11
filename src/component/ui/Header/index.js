
import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import styles from './style'

export class Header extends Component {
    render(props) {
        return (
            <View style={styles.container}>
            {/* <Image source={require('../../assets/images/Logo-porter.png')}
                style={styles.logo}
            /> */}
            </View>
        )
    }
}

export default Header
