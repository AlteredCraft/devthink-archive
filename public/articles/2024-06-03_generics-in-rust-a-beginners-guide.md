---
title: "Generics in Rust: A Beginner's Guide"
author: Sam Keen
date: June 03, 2024
url: https://samkeen.dev/generics-in-rust-a-beginners-guide
---

# Generics in Rust: A Beginner's Guide

*By Sam Keen on June 03, 2024*

---

Hello, fellow Rustaceans! In this blog post, we'll dive into the world of generics in Rust. If you're coming from languages like Python or JavaScript, you might be wondering why we need generics in Rust. Fear not, as we'll explore the purpose of generics, their basic syntax, and how they can make your code more flexible and reusable.

## The Need for Generics

In Python or JavaScript, you can write functions that accept arguments of any type. For example, consider this Python function that returns the larger of two values:

```python
def max(a, b): return a if a > b else b
```

This function works with any type that supports comparison using the `>` operator. However, in Rust, the type system is more strict. If we try to write a similar function without generics, we'll encounter limitations.

```python
fn max(a: i32, b: i32) -> i32 { if a > b { a } else { b }}
```

The above Rust function only works with `i32` values. If we want to find the maximum of two `f64` values or two `String` values, we would need to write separate functions for each type. This is where generics come to the rescue!

## Introducing Generics

Generics allow us to write code that can work with multiple types. Let's rewrite the `max` function using generics:

```python
fn max<T: PartialOrd>(a: T, b: T) -> T{ if a > b { a } else { b }}
```

In this generic version, we introduce a type parameter `T`. The `<T>` syntax after the function name indicates that `T` is a generic type. The function now accepts two arguments of type `T` and returns a value of type `T`.

But wait, what's that `: PartialOrd` clause? We'll get to that in a moment. For now, let's see how we can use this generic function:

```python
let max_i32 = max(5, 10);let max_f64 = max(3.14, 2.71);let max_str = max("hello".to_string(), "world".to_string());
```

The `max` function can now work with `i32`, `f64`, and `String` values without the need for separate functions for each type. The Rust compiler infers the type of `T` based on the arguments provided.

## Restricting Type Parameters with Trait Bounds

In the generic `max` function, we added the syntax: `<T: PartialOrd>`. This is a trait bound that specifies that the type `T` must implement the `PartialOrd` trait. The `PartialOrd` trait allows for comparison between values of type `T` using operators like `>`, `<`, `>=`, and `<=`.

By adding this trait bound, we ensure that the generic `max` function can only be called with types that support comparison. If we try to use a type that doesn't implement `PartialOrd`, the Rust compiler will throw an error.

### where clause; alternative syntax

An alternative syntax for specifying Trait Bounds is the use of the `where` clause. Here is the same function using this syntax.

```python
fn max<T>(a: T, b: T) -> Twhere T: PartialOrd,{ if a > b { a } else { b }}
```

The `where` clause is useful when you need to specify multiple trait bounds or when the function signature becomes too cluttered with trait bounds. It helps improve readability and keeps the function signature clean.

## Generics in Structs

Generics are not limited to functions; they can also be used with structs to create generic data structures. Let's consider a simple example of a `Point` struct that can hold coordinates of any type:

```python
struct Point<T> { x: T, y: T,}
```

In this example, the `Point` struct has a generic type parameter `T`. By using `<T>` after the struct name, we indicate that `T` is a generic type that can be substituted with any concrete type.

We can create instances of the `Point` struct with different types:

```python
let integer_point = Point { x: 5, y: 10 };let float_point = Point { x: 1.3, y: 4.7 };
```

Here, `integer_point` is a `Point<i32>`, and `float_point` is a `Point<f64>`. The Rust compiler infers the type of `T` based on the types of the values assigned to the `x` and `y` fields.

We can also explicitly specify the type when creating an instance:

```python
let explicit_point: Point<u32> = Point { x: 10, y: 20 };
```

Generic structs can have multiple type parameters and can use trait bounds to restrict the types that can be used. For example:

```python
struct Rectangle<T: PartialOrd> { width: T, height: T,}
```

In this case, the `Rectangle` struct has a generic type parameter `T` that must implement the `PartialOrd` trait. This allows the struct to perform comparisons on the `width` and `height` fields if needed.

Generic structs provide a way to create reusable and flexible data structures that can work with different types, much like generic functions.

## Conclusion

Generics are a powerful feature in Rust that allow you to write code that works with multiple types. They provide flexibility and reusability while maintaining the strong type safety that Rust is known for.

In this blog post, we covered the purpose of generics and their basic syntax in functions and structs. We explored how to use generics to overcome the limitations of non-generic code and how to restrict type parameters using trait bounds.

As you continue your Rust journey, you'll encounter more advanced concepts related to generics, such as generic enums, traits, and more complex use cases. However, understanding the basics of generics in functions and structs will give you a solid foundation to build upon.

Happy coding, and may the power of generics be with you!