import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text
} from "react-native";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { TodoItem } from "../components/TodoItem";

export const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);

  const addTodo = (newItem) => {
    setTodoItems([...todoItems, { ...newItem }]);
  };

  const deletTodo = (id) => {
    setTodoItems((newList) => {
        return newList.filter(todoItems => id != todoItems.id)
    })
  }

  return (
    <SafeAreaView style={styles.app}>
      <Header />
      <ImageBackground source={require("../assets/bg.jpeg")} style={styles.bg}>
        <Form addTodo ={addTodo} />

        {
            todoItems.length 
            ? <Text> All: [{todoItems.length}]</Text>
            : null
        }
        <FlatList
          data={todoItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem item={item}  deletTodo = {deletTodo}/>}
        />
      </ImageBackground>
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  app: {
    flex: 1,
  },
});
