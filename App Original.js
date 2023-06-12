import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class App extends Component {
  state = {
    todos: [],
    newTodo: '',
  };

  addTodo = () => {
    if (this.state.newTodo !== '') {
      const newId = Date.now();
      const newTodo = {
        text: this.state.newTodo,
        id: newId,
      };
      this.setState((prevState) => ({
        todos: [...prevState.todos, newTodo],
        newTodo: '',
      }));
    }
  };

  deleteTodo = (id) => {
    const updatedTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Todo List</Text>
        {this.state.todos.map((todo) => (
          <View key={todo.id} style={styles.todoItem}>
            <Text style={styles.todoText}>{todo.text}</Text>
            <Button
              title="Delete"
              onPress={() => this.deleteTodo(todo.id)}
              color="red"
            />
          </View>
        ))}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.state.newTodo}
            onChangeText={(text) => this.setState({ newTodo: text })}
            placeholder="Enter a new todo"
          />
          <Button title="Add" onPress={this.addTodo} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  todoText: {
    flex: 1,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
});

export default App;
