import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import uuid from "react-native-uuid"

export const Form = ({addTodo}) => {

    const [inputValue, setInputValue] = useState(" ")

    return(
        <View style = {styles.container}>
            <TextInput 
                placeholder="enter todo name "
                style = {styles.txtInput}
                onChangeText = {text => setInputValue(text)}
                value = {inputValue}
            /> 
            <Button 
                title = "Add todo"
                disabled = {!inputValue}
                onPress={() => {
                    addTodo({
                        id: uuid.v4(),
                        text: inputValue
                    })
                    setInputValue("")
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    txtInput: {
        padding: 15,
        margin: 15,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: .3,
        shadowRadius: 3
    }
})