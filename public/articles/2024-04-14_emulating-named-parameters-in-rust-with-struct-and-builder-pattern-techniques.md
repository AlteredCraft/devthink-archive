---
title: "Emulating Named Parameters in Rust with Struct and Builder Pattern Techniques"
author: Sam Keen
date: April 14, 2024
url: https://samkeen.dev/emulating-named-parameters-in-rust-with-struct-and-builder-pattern-techniques
---

![Emulating Named Parameters in Rust with Struct and Builder Pattern Techniques](/images/samkeen-dev/emulating-named-parameters-in-rust-with-struct-and-builder-pattern-techniques-0.png)

# Emulating Named Parameters in Rust with Struct and Builder Pattern Techniques

*By Sam Keen on April 14, 2024*

---

If you are transitioning to Rust from a language such as Python, you might find yourself missing the convenience of named parameters. In Python, named parameters allow you to specify arguments by their parameter name, making the code more readable and self-explanatory, especially when dealing with optional parameters and default values.

```python
# Python use of named parameters with default valuesdef get_customer_records(filter: str = "", limit: int|None = None): ...
```

However, Rust does not have direct support for named parameters, which can be challenging for Python developers. In this blog post, we'll explore two alternative approaches in Rust that offer similar clarity and expressiveness: struct parameters and the builder pattern.

## **Struct Parameters**

### Simulating Named Arguments

One way to simulate named parameters in Rust is by using struct parameters. Instead of passing individual optional parameters, you can define a struct that holds the optional parameters and their default values. This approach makes the function signature clearer and allows for a sense of named arguments when calling the function, although it's not exactly the same as Python's named arguments.

Here's an example:

```python
struct CustomerRecordOptions { filter: String, limit: Option<usize>,}// implement the default values for the members of this structimpl Default for CustomerRecordOptions { fn default() -> Self { CustomerRecordOptions { filter: "".to_string(), limit: None, } }}fn get_customer_records(options: CustomerRecordOptions) -> Vec<CustomerRecord> { let filter = options.filter; let limit = options.limit; // ...}fn main() { let result_using_defaults = get_customer_records( CustomerRecordOptions::default() ); let result_using_custom_values = get_customer_records( CustomerRecordOptions{filter: "age > 42 ".to_string(), limit: Some(10)} );}
```

### Deriving Default Values

We can improve the struct parameter approach even further by leveraging the `#[derive(Default)]` attribute. By prefixing the `CustomerRecordOptions` struct with `#[derive(Default)]`, Rust automatically derives the `Default` trait implementation for the struct, eliminating the need for manual implementation. This simplifies the code and reduces boilerplate, making it more concise and maintainable. See the Rust [docs](https://doc.rust-lang.org/rust-by-example/trait/derive.html) for the requirements to enable derivation of the Default trait.

```python
#[derive(Default)]struct CustomerRecordOptions { filter: String, // default value: "" limit: Option<usize>, // default value: 0}// Using #[derive(Default)] removes the need to manually// implement the Default trait; impl Default for CustomerRecordOptions...fn main() { let result = get_customer_records( CustomerRecordOptions::default() );}
```

With Struct Parameters, we are not identical to what we remember from Python, but we are certainly close.

```python
# Pythonresult_using_custom_values = get_customer_records( filter = "age > 42 ", limit = 10)# Rustresult_using_custom_values = get_customer_records( CustomerRecordOptions{filter: "age > 42 ".to_string(), limit: Some(10)})
```

## **Builder Pattern**

### Fluent and Expressive Interface

Another popular approach in Rust is the builder pattern. It provides a fluent and expressive way of configuring parameters. The builder pattern allows for a step-by-step construction of the configuration, making it easier to understand and maintain. Although it requires more code to implement compared to struct parameters, the builder pattern offers a more intuitive and readable interface.

Here's out CustomerRecord example using a builder pattern:

```python
struct CustomerRecordOptionsBuilder { filter: Option<String>, limit: Option<usize>,}impl CustomerRecordOptionsBuilder { fn new() -> Self { CustomerRecordOptionsBuilder { filter: None, limit: None, } } fn filter(mut self, filter: &str) -> Self { self.filter = Some(filter.to_string()); self } fn limit(mut self, limit: usize) -> Self { self.limit = Some(limit); self } fn build(self) -> CustomerRecordOptions { CustomerRecordOptions { filter: self.filter.unwrap_or_default(), limit: self.limit, } }}// Our method siganture stays the same, but we will use a// Builder to construct CustomerRecordOptionsfn get_customer_records(options: CustomerRecordOptions) -> Vec<CustomerRecord> { let filter = options.filter; let limit = options.limit; // ...}
```

When calling the function, you can use the builder to illustrate the parameter values used:

```python
let result_with_all_custom_values = get_customer_records( CustomerRecordOptionsBuilder::new() .filter("age > 42") .limit(10) .build());let result_with_some_defaults = get_customer_records( CustomerRecordOptionsBuilder::new() // filter will use its default value .limit(10) .build());
```

### Abstracting Away Manual Conversions

One advantage of the Builder pattern is that it abstracts away the need for manual conversions, such as calling `.to_string()` on string literals or wrapping values in `Some()`. The Builder methods handle these conversions internally, providing a cleaner and more convenient way to specify parameter values.

### IDE Autocompletion Support

Another significant benefit of the Builder pattern is IDE autocompletion support. Most Rust IDEs can provide intelligent autocompletion suggestions based on the available Builder methods. This helps developers discover and utilize the available options easily, enhancing productivity and reducing the chances of errors.

![](/images/samkeen-dev/emulating-named-parameters-in-rust-with-struct-and-builder-pattern-techniques-0.png)

## **Choosing the Right Approach**

### Use Case Considerations

When deciding between struct parameters and the Builder pattern, consider the specific requirements and characteristics of your project. Struct parameters are suitable for simple and stable configurations that are not expected to change frequently. They offer a straightforward approach without the overhead of creating a separate Builder type. On the other hand, the Builder pattern is preferred for more complex and extensible configurations that may evolve over time. It provides greater flexibility and maintainability in the long run.

### Rust Ecosystem Conventions

It's also essential to consider the conventions and patterns used in the Rust ecosystem. Many Rust libraries and frameworks utilize the Builder pattern, making it a consistent and familiar convention within the community. Adhering to these conventions can make your code more idiomatic and easier for other Rust developers to understand and collaborate on.

## **Conclusion**

While Rust doesn't have direct support for named parameters like Python, the alternative approaches discussed in this blog poststruct parameters and the Builder patternprovide similar clarity and expressiveness. By leveraging these techniques, you can achieve readable and maintainable code that mimics the benefits of named parameters.

As you continue your journey with Rust, embrace the language's unique features and idioms. Appreciate the benefits of these alternative approaches and how they contribute to writing clean, expressive, and idiomatic Rust code. With practice and familiarity, you'll find that Rust's way of handling optional parameters and default values becomes second nature.

Code, innovate, and have fun!