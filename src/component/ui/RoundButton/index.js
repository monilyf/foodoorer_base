import React from 'react';
import {
    View,
    TouchableHighlight,
    TouchableOpacity,
    Text,
} from 'react-native';

import COLOR from "../../../utils/Color";
//import {fontXSmall, fontSmall, fontNormal, fontLarge, fontXLarge} from 'src/utils/theme';
import Theme from "../../../utils/ThemeUtils"
import PropTypes from 'prop-types';

const RoundButton = (props) => {

    onClick = () => {
        if (props.onPress){
            props.onPress();
        }
    };

    
        let btnContainerStylesArray = [];
        let btnTextStylesArray = [];
        if (props.btn_xs) {
            btnContainerStylesArray.push({paddingHorizontal: 20, paddingVertical: 5});
            btnTextStylesArray.push({fontSize: Theme.fontXSmall});
        } else if (props.btn_sm) {
            btnContainerStylesArray.push({paddingHorizontal: 20, paddingVertical: 7});
            btnTextStylesArray.push({fontSize: Theme.fontSmall});
        } else if (props.btn_lg) {
            btnContainerStylesArray.push({paddingHorizontal: 20, paddingVertical: 9});
            btnTextStylesArray.push({fontSize: Theme.fontLarge - 2});
        } else if (props.btn_xl) {
            btnContainerStylesArray.push({paddingHorizontal: 20, paddingVertical: 10});
            btnTextStylesArray.push({fontSize: Theme.fontXLarge - 2});
        } else {
            btnContainerStylesArray.push({paddingHorizontal: 20, paddingVertical: 10});
            btnTextStylesArray.push({fontSize: Theme.fontNormal});
        }
        let btnWholeStyles = [];
        btnWholeStyles.push({
            marginTop: props.mt,
            marginBottom: props.mb,
            marginStart: props.ms,
            marginEnd: props.me,
        });
        if (props.btn_block) {
            btnWholeStyles.push({
                alignSelf: 'stretch'
            });
        }

        let borderColor = props.borderColor ? props.borderColor : props.backgroundColor;
        btnContainerStylesArray.push({
            backgroundColor: props.backgroundColor,
            borderColor: borderColor,
            alignItems: 'center',
            borderRadius: props.border_radius,
            borderWidth: 1,
            borderBottomWidth: 0,
        });
        btnTextStylesArray.push({color: props.textColor});

        return (
            <TouchableHighlight style={btnWholeStyles}>
                <View>
                    <TouchableOpacity style={btnContainerStylesArray} 
                            onPress={onClick}>
                        <Text style={btnTextStylesArray}>
                            {props.children}
                        </Text>
                    </TouchableOpacity>
                </View>
            </TouchableHighlight>
        );
    }



RoundButton.defaultProps = {
    ...TouchableHighlight.defaultProps,
    textColor: COLOR.WHITE,
    backgroundColor: COLOR.PRIMARY,
    btn_xs: false,
    btn_sm: false,
    btn_lg: false,
    btn_xl: false,
    btn_block: false,
    border_radius: 30,
    mt: 0,
    mb: 0,
    ms: 0,
    me: 0,
};
RoundButton.propTypes = {
    ...TouchableHighlight.propTypes,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    btn_xs: PropTypes.bool,
    btn_sm: PropTypes.bool,
    btn_lg: PropTypes.bool,
    btn_xl: PropTypes.bool,
    btn_block: PropTypes.bool,
    border_radius: PropTypes.number,
    mt: PropTypes.number,
    mb: PropTypes.number,
    ms: PropTypes.number,
    me: PropTypes.number,
};
export default RoundButton;