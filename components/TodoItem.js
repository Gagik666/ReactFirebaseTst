import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const TodoItem = ({item, deletTodo}) => {
    return (
        <TouchableOpacity style = {styles.todo} onLongPress={() => deletTodo(item.id)}>
            <Text style = {styles.text}>
                {item.text}
            </Text>
            <TouchableOpacity
                onPress={() => deletTodo(item.id)}
            >
                <Text>&#128465;</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "#f2f2f2",
        margin: 5,
        borderRadius: 5
    },
    text: {
        fontSize: 18
    }
})