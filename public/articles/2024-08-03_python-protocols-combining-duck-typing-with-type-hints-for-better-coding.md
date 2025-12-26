---
title: "Python Protocols: Combining Duck Typing with Type Hints for Better Coding"
author: Sam Keen
date: August 03, 2024
url: https://samkeen.dev/python-protocols-combining-duck-typing-with-type-hints-for-better-coding
---

# Python Protocols: Combining Duck Typing with Type Hints for Better Coding

*By Sam Keen on August 03, 2024*

---

Python's dynamic nature and support for duck typing have long been praised for their flexibility. However, as codebases grow larger and more complex, the benefits of static type checking become increasingly clear. But how can we reconcile the flexibility of duck typing with the safety of static type checking? Enter Python's `Protocol` class.

In this tutorial, you'll learn:

1. What duck typing is and how it's supported in Python
2. The pros and cons of duck typing
3. How Abstract Base Classes (ABCs) attempt to solve typing issues
4. How to use `Protocol` to get the best of both worlds: duck typing flexibility with static type checking

## Understanding Duck Typing

Duck typing is a programming concept where the type or class of an object is less important than the methods it defines. It's based on the idea that "If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck."

In Python, duck typing is fully supported. For example:

```python
class Duck: def quack(self): print("Quack!")class Person: def quack(self): print("I'm imitating a duck!")def make_it_quack(thing): # Note: No type hint here thing.quack()duck = Duck()person = Person()make_it_quack(duck) # Output: Quack!make_it_quack(person) # Output: I'm imitating a duck!
```

In this example, `make_it_quack` doesn't care about the type of `thing`. It only cares that `thing` has a `quack` method. Note that there's no type hint for the `thing` parameter, which is typical in duck-typed code but can lead to issues in larger codebases.

### Pros and Cons of Duck Typing

Duck typing offers several advantages:

1. Flexibility: It allows for more flexible code that isn't tied to specific types.
2. Easier code reuse: You can use existing classes in new contexts without modification.
3. Emphasis on behavior: It focuses on what an object can do rather than what it is.

However, it also has some drawbacks:

1. Lack of clarity: It can be unclear what methods an object needs to implement.
2. Runtime errors: Type-related errors are only caught at runtime.
3. Less IDE support: IDEs struggle to provide accurate autocompletion and error checking.

## The ABC Solution

One approach to addressing these issues is using Abstract Base Classes (ABCs). Here's an example:

```python
from abc import ABC, abstractmethodclass Quacker(ABC): @abstractmethod def quack(self): passclass Duck(Quacker): def quack(self): print("Quack!")class Person(Quacker): def quack(self): print("I'm imitating a duck!")def make_it_quack(thing: Quacker): thing.quack()duck = Duck()person = Person()make_it_quack(duck)make_it_quack(person)
```

While this approach provides better type checking and clearer interfaces, it has disadvantages:

1. It requires inheritance, which can lead to inflexible hierarchies.
2. It doesn't work with existing classes that you can't modify.
3. It goes against Python's "duck typing" philosophy.

## Protocols: The Best of Both Worlds

Python 3.8 introduced the `Protocol` class, which allows us to define interfaces without requiring inheritance. Here's how we can use it:

```python
from typing import Protocolclass Quacker(Protocol): def quack(self):...class Duck: def quack(self): print("Quack!")class Person: def quack(self): print("I'm imitating a duck!")def make_it_quack(thing: Quacker): thing.quack()duck = Duck()person = Person()make_it_quack(duck)make_it_quack(person)
```

Let's break this down:

1. We define a `Quacker` protocol that specifies the interface we expect.
2. Our `Duck` and `Person` classes don't need to inherit from anything.
3. We can use type hints with `make_it_quack` to specify that it expects a `Quacker`.

This approach gives us several benefits:

1. Static type checking: IDEs and type checkers can catch errors before runtime.
2. No inheritance required: Existing classes work as long as they have the right methods.
3. Clear interfaces: The Protocol clearly defines what methods are expected.

Here's a more complex example showing how Protocols can be as complex as needed (`Shape`), keeping your domain classes (`Circle`, `Rectangle`) flat:

```python
from typing import Protocol, Listclass Drawable(Protocol): def draw(self): ...class Resizable(Protocol): def resize(self, factor: float): ...class Shape(Drawable, Resizable, Protocol): passdef process_shapes(shapes: List[Shape]): for shape in shapes: shape.draw() shape.resize(2.0)# Example usageclass Circle: def draw(self): print("Drawing a circle") def resize(self, factor: float): print(f"Resizing circle by factor {factor}")class Rectangle: def draw(self): print("Drawing a rectangle") def resize(self, factor: float): print(f"Resizing rectangle by factor {factor}")# This works with any class that has draw and resize methods,# regardless of its actual type or inheritanceshapes: List[Shape] = [Circle(), Rectangle()]process_shapes(shapes)
```

In this example, `Circle` and `Rectangle` don't inherit from `Shape` or any other class. They simply implement the required methods (`draw` and `resize`). The `process_shapes` function can work with any objects that have these methods, thanks to the `Shape` protocol.

## Summary

Protocols in Python provide a powerful way to bring static typing to duck-typed code. They allow us to specify interfaces in the type system without requiring inheritance, maintaining the flexibility of duck typing while adding the benefits of static type checking,

By using Protocols, you can:

1. Define clear interfaces for your code
2. Get better IDE, (static type checking), support and catch errors earlier
3. Maintain the flexibility of duck typing
4. Leverage type checking for classes you are unable to modify.

If you want to learn more about Protocols and type hinting in Python, check out the official Python [documentation](https://peps.python.org/pep-0544/) on the `typing` module, or explore advanced static type checking tools like [mypy](https://github.com/python/mypy).

Happy coding, and may your ducks always quack with type safety!

You can find more of my content, including my newsletter [here](https://samkeen.dev/about)