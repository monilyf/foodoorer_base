import React from 'react';
import {View,StyleSheet,Image} from 'react-native';
import Color from '../../../utils/Color';
import Spinner from 'react-native-loading-spinner-overlay';

function Loader(props){
    return (
        <Spinner visible={props.visible}>
            <View style={[styles.container]}>
                <Image style={styles.img}
                    source={require("../../../assets/images/loader1.gif")}
                />
            </View>
        </Spinner>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Color.WHITE
    },
    imag:{
        flex:1,
        maxHeight:100,
        maxWidth:100
    }
})

export default Loader;