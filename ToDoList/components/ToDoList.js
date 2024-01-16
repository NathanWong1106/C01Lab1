import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ todoStrings }) => {
    const [todos, setTodos] = useState(todoStrings.map((value) => ({ id: uuidv4(), title: value })));

    const addToDo = (newTitle) => {
        const newTodo = {
            id: uuidv4(),
            title: newTitle
        };

        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    const removeToDo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
    };

    return (
        <View style={styles.todoListContainer}>
            {
                todos.map(({ id, title }) => (
                    <View key={id} style={styles.todoItem}>
                        <Text>{title}</Text>
                        <Button title="Remove" onPress={() => removeToDo(id)} />
                    </View>
                ))
            }
            <AddTask onAddTask={addToDo}/>
        </View>
    );
};

ToDoList.defaultProps = {
    todoStrings: []
};

const styles = StyleSheet.create({
    todoListContainer: {
        margin: 10,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
});

export default ToDoList;