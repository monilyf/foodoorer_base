import React,{Component} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Color from '../../../utils/Color'
import ThemeUtils from '../../../utils/ThemeUtils'
import Toast from '../../lib/react-native-another-toast'
import Label from '../Label'

class ToastMessage extends Component{ 
    componentDidMount(){
        this.toast.showToast()
    }
    render(){
        return (
            <View>
               <Toast
                content={
                    <View style={styles.container}>
     <View style={styles.subContainer}>
     {/* <View style={styles.column}></View> */}
     <View style={styles.content}>
       
        <View style={styles.toastMsg}><Icon name='alert-circle' size={20} color={Color.DARK_BLUE}/>
        <Label color={Color.DARK_BLUE} ms={12} >{this.props.text}</Label>
        </View>
      </View>
     </View>
    </View>
                }
                slide='bottom'
                ref={(c) => {
            this.toast = c;
          }}
                


               />
            </View>
        )
    }
}

export default ToastMessage

const styles = StyleSheet.create({
    container:{
        marginTop:75,backgroundColor:'#d3e0ea',width:'100%',
        alignSelf:'center',paddingVertical:10,borderRadius:12
        ,marginLeft:22
    },
    subContainer:{
        flexDirection:'row',height:30
    },
    column:{backgroundColor:'red',width:5},
    content:{
        marginHorizontal:20,justifyContent:'center',flexDirection:'row'
    },
    toastMsg:{flexDirection:'row',alignItems:'center'}
})