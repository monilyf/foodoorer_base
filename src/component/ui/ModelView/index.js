import React from 'react'
import { View, Text, Model } from 'react-native'

const ModelView = () => {
    return (
        <View>
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
      </Modal>
        </View>
    )
}

export default ModelView
