import React, { useState } from 'react'
import { View, Button, StyleSheet, TextInput } from 'react-native';

const AddTask = ({ onAddTask }) => {
    const [title, updateTitle] = useState("");

    const handleAddTask = () => {
        if (title.trim() != "") {
            onAddTask(title);
            updateTitle("");
        }
    }

    return (
        <View style={styles.addTodoForm}>
            <TextInput value={title} onChangeText={(txt) => updateTitle(txt)} style={styles.input} />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    )
};

const styles = StyleSheet.create({
    addTodoForm: {
        margin: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default AddTask;