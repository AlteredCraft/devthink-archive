---
title: "Building your first Rust app: a guided learning approach"
author: Sam Keen
date: April 29, 2024
url: https://samkeen.dev/building-your-first-rust-app-a-guided-learning-approach
---

# Building your first Rust app: a guided learning approach

*By Sam Keen on April 29, 2024*

---

Are you a software developer looking to dive into Rust? This blog post offers a unique learning experience that goes beyond the typical tutorial. Instead of simply providing code to copy/paste, we'll provide you with:

* The written requirements for a Todo List CLI App.
* A skeleton of the application structure to give you a starting point.
* A unit test suite which will pass given an implementation meeting the requirements.

This gives you the guardrails to get started, but it is left to you to research the implementations to fill in the provided scaffolding; empowering you to develop a deeper understanding of Rust.

Whether you're coming from Python, Java, JavaScript, Ruby, or any other programming language, this project will help you gain practical experience with Rust and some key standard libraries.

## Project Overview: Todo List CLI App

You'll be building a command-line interface (CLI) application that allows users to manage their todo list. With this app, users can add new tasks, mark items as completed, and view their todo list.

### Sneak Peek of What You'll Build

```python
## Starting the app greets the user and displays the help menu#$ cargo runWelcome to your Todo appAvailable commands: add <todo_text> - Add a new todo item complete <todo_id> - Mark a todo item as completed list - List all todo items ? - Show available commands x - Exit the program>## Adding a todo performs that action then lists all todos#> add Finish homeworkTodo item added successfully![ ] 0: Buy groceries[ ] 1: Do laundry[ ] 2: Finish homework## Completing a todo performs that action then lists all todos#> complete 0Todo item marked as completed![x] 0: Buy groceries[ ] 1: Do laundry[ ] 2: Finish homework## Attempt to complete a nonexistent Todo#> complete 99Todo item with id 99 not found[x] 0: Buy groceries[ ] 1: Do laundry[ ] 2: Finish homework>## x, exits the application#> xExiting...$
```

## Written requirements

This is a simple Todo list application accessible through a CLI as seen above.

* Define a `TodoItem` struct with the following fields:

  + `id: <appropriate int type>`: The unique identifier of the todo item, which is the index of the item in the vector.
  + `text: String`: The text description of the todo item.
  + `completed: bool`: A boolean flag indicating whether the item is completed or not.
* Define a `TodoApp` struct that holds a vector of `TodoItem` structs.

  + `items: Vec<TodoItem>`
* Implement the following methods for the `TodoApp` struct. Parameters and return types are described but not given in the function signature. See the Unit tests for more detail of the expected implementations.  
   *Note:*[*These docs*](https://doc.rust-lang.org/rust-by-example/fn/methods.html) *are a good overview of methods used with Structs in Rust. Key is know when to pass a reference to self (*`&self`*) and when that reference would need to be mutable (*`&mut`*).*

  + `fn new()`: Creates a new instance of `TodoApp` with an empty vector of items.
  + `fn add()`: Adds a new todo item with the provided text to the list. The `id` of the new item will be its index in the vector.
  + `fn complete()`: Marks the todo item with the specified `id` as completed by setting its `completed` flag to `true`. Returns `true` if the todo was found, `false` if not found.  
     *Note: Todo items are never removed from the vector but rather marked as completed.*
  + `fn list()`: Returns a list of all the todo items, showing their `id`, completion status, and text. Prefix completed items with `[x]` and incomplete items with `[ ]`.  
     *Note: For simplicity there will be no durable storage; todo items will be stored in a runtime vector (*`Vec`*) and all lost when the program exits.*
* Handle error cases gracefully, such as when the user enters an invalid `id` for completion.
* Implement a CLI interface to interact with the `TodoApp` struct. The CLI will loop until the user chooses the exit command. See the CLI usage example above.

  + The CLI should handle the following commands
  + `add <todo_text>` : This will add a new Todo item
  + `complete <todo_id>` : This will complete the task for the given id. An error should be shown if the Todo id is not found.
  + `list` : This will list all the Todo's with their id and completion status
  + `?` This will list the commands available
  + `x` : This will exit the program

## Unit Tests: Ensuring Correctness

To ensure that your implementation meets the requirements, we've provided this set of (currently failing) unit tests. This test suite is what you will use to validate your implementations of `TodoApp` and `TodoItem`.

```python
#[cfg(test)]mod tests { use super::*; #[test] fn test_add_todo() { let mut app = TodoApp::new(); app.add(String::from("Buy groceries")); assert_eq!(app.items.len(), 1); assert_eq!(app.items[0].id, 0); assert_eq!(app.items[0].text, "Buy groceries"); assert_eq!(app.items[0].completed, false); } #[test] fn test_complete_todo() { let mut app = TodoApp::new(); app.add(String::from("Buy groceries")); app.add(String::from("Do laundry")); let todo_found = app.complete(0); assert!(todo_found); assert_eq!(app.items[0].completed, true); assert_eq!(app.items[1].completed, false); } #[test] fn test_complete_todo_not_found() { let mut app = TodoApp::new(); app.add(String::from("Buy groceries")); app.add(String::from("Do laundry")); let todo_found = app.complete(99); assert_eq!(todo_found, false); } #[test] fn test_view_todos() { let mut app = TodoApp::new(); app.add(String::from("Buy groceries")); app.add(String::from("Do laundry")); app.complete(1); let output_vec = app.list(); assert!(output_vec.contains(&"[ ] :0 Buy groceries".to_string())); assert!(output_vec.contains(&"[x] :1 Do laundry".to_string())); }}
```

`cargo test` will run the unit tests. Unit tests in Rust are straightforward, with just a little syntax to learn. [Rust by Example](https://doc.rust-lang.org/rust-by-example/testing/unit_testing.html) provides a great summary to get you started.

## Getting started

Head over to Github and clone this [repo](https://github.com/samkeen/learing-rust-todo-cli-app). This will give you the starting skeleton files for `main.rs` and `todo_app.rs` (which includes the unit test suite).

```python
git clone git@github.com:samkeen/learning-rust-todo-cli-app.gitcd learning-rust-todo-cli-appcargo testLOTS OF ERRORS :(
```

Your initial task is to review the requirements and the skeleton implementation of `todo_app.rs` (including the unit test suite). Implement the `TodoApp` and `TodoItem` structs and any associated functions. As you make progress continue to run `cargo test` to validate your progress.

All Tests passing

```python
cargo testrunning 4 teststest todo_app::tests::test_add_todo ... oktest todo_app::tests::test_complete_todo ... oktest todo_app::tests::test_view_todos ... oktest todo_app::tests::test_complete_todo_not_found ... oktest result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

When all tests pass, move to `main.rs` to implement the CLI, which wont be too difficult now that you have working models for your todo app. Once the CLI functionality matches the spec, you are done, congratulations!!!

## Wrapping Up

By working through the skeleton code and implementing the functionality yourself, you've gained valuable hands-on experience with Rust and its concepts. Remember, the real learning comes from tackling the challenges and referring to the [Rust documentation](https://doc.rust-lang.org/), tutorials, and examples as needed. There is an [example working implementation](https://github.com/samkeen/learing-rust-todo-cli-app/tree/example-solution) on this branch in the repo, but I highly encourage you to not peek unless you really get stuck. Also, realize the example implementation is just one possibility of meeting the requirements, yours will probably look different and that's completely fine and expected.

As you continue your Rust journey, embrace the opportunity to explore further, experiment with different approaches, and engage with the supportive Rust community. Building projects from scratch, guided by tests and a solid foundation, is a powerful way to reinforce your understanding and grow as a Rust developer.

Keep coding, keep learning, and most importantly, enjoy the process! Your newfound Rust skills will undoubtedly open up exciting possibilities in your programming career.

If you like this format of instruction, [let me know](https://twitter.com/samkeen) and I'll publish more (I really enjoyed creating this one).

Happy coding, and welcome to the world of Rust!