---
title: "Logging in rust, a beginners guide"
author: Sam Keen
date: February 13, 2024
url: https://samkeen.dev/logging-in-rust-a-beginners-guide
---

# Logging in rust, a beginners guide

*By Sam Keen on February 13, 2024*

---

In this guide, we'll cover how to implement a basic yet effective logging strategy in Rust, laying down the foundation you need to start any application. When embarking on developing an application, large or small, my advice is to forgo `print` statements in favor of setting up proper logging. Doing so early simplifies integrating logging levels from the outset.

### **Basic Logging**

Rust's logging ecosystem is centered around the `log` crate, offering a unified logging facade. This setup means you can write logging code once, and it will be compatible with any logging implementation you choose going forward. Here's how to get started:

#### 1. Add Dependencies

To utilize the logging facade, add the `log` crate to your `Cargo.toml`. You'll also need an implementation to process the log messages, with `env_logger` being a popular choice for its simplicity and configurability.

```python
[dependencies]log = "0.4"env_logger = "0.9"
```

*Note: The version numbers are just examples. Always check*[*crates.io*](https://crates.io/)*for the latest versions.*

#### 2. Initialize the Logger

Initialize `env_logger` within your main function or entry point by invoking `env_logger::init()`. This setup reads the `RUST_LOG` environment variable to configure logging appropriately.

```python
fn main() { env_logger::init();}
```

#### 3. Logging Messages

Log messages at various levels (error, warn, info, debug, trace) with the `log` crate's functions:

```python
fn main() { env_logger::init(); log::error!("This is an error message."); log::warn!("This is a warning message."); log::info!("This is an info message."); log::debug!("This is a debug message."); log::trace!("This is a trace message.");}
```

The visibility of these messages is influenced by the `RUST_LOG` setting, defaulting to error, warn, and info levels with `env_logger`.

#### 4. Configuring Log Levels

Adjust visible log levels via the `RUST_LOG` environment variable, enabling module and level-specific filtering:

```python
RUST_LOG=debug cargo run # Show debug and higher messagesRUST_LOG=my_crate=trace cargo run # Show trace and higher messages for 'my_crate'
```

#### 5. Advanced Configuration

For more production like setups, `log` and `env_logger` support features like programmatic log filtering and custom formats. Explore `env_logger`'s documentation for details on these advanced options.

Here we show using the provided Builder to set up a formatter in addition to configuring the log level in code.

```python
use env_logger::Builder;use log::LevelFilter;use std::io::Write;fn main() { let mut builder = Builder::new(); builder.format(|buf, record| { writeln!(buf, "{}: {}: {}", buf.timestamp(), record.level(), record.args()) }).filter_level(LevelFilter::Info).init(); log::info!("Visible due to INFO level setting."); log::debug!("Invisible due to INFO level setting.");}
```

### **Conclusion**

Incorporating logging is crucial in any application and Rust is no different. From initializing the logger to configuring log levels and beyond, Rust offers robust tools for effective logging.

**Logging in distributed systems and the world of structured logging will be covered in a future post.** Subscribe to get notified!