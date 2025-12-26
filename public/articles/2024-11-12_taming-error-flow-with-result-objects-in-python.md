---
title: "Taming Error Flow with Result Objects in Python"
author: Sam Keen
date: November 12, 2024
url: https://samkeen.dev/taming-error-flow-with-result-objects-in-python
---

# Taming Error Flow with Result Objects in Python

*By Sam Keen on November 12, 2024*

---

Error handling is a critical aspect of software development, yet it's often overlooked or implemented in ways that can lead to confusing and hard-to-maintain code. This article explores the limitations of traditional exception-based error handling and introduces a more robust alternative: Result objects. We'll dive into how Result objects can significantly improve code clarity, maintainability, and error management in your applications. By the end of this post, you'll have a solid understanding of when and how to use Result objects effectively, as well as when exception handling still makes sense.

After reading this article, you will:

* Understand the limitations of exception-based error handling
* Know how Result objects can improve code clarity and maintenance
* Learn how to implement and use Result objects effectively
* Understand which scenarios still warrant exception handling

## The Problem with Exception-Based Error Handling

Let's look at a typical web application endpoint handling user registration. This example illustrates common patterns (and problems) with exception-based error handling:

```python
def register_user(request_data: dict) -> User: try: # Extract and validate email if 'email' not in request_data: raise ValidationError("Email is required") email = request_data['email'] if '@' not in email: raise ValidationError("Invalid email format") if User.objects.filter(email=email).exists(): raise ValidationError("Email already registered") # Extract and validate password if 'password' not in request_data: raise ValidationError("Password is required") password = request_data['password'] if len(password) < 8: raise ValidationError("Password too short") # Create user user = User.objects.create( email=email, password=hash_password(password) ) # Send welcome email try: send_welcome_email(user) except SMTPError: # Should we rollback user creation? Log it? Ignore it? logger.error("Failed to send welcome email") return user except ValidationError as e: # Log and re-raise for the web framework to handle logger.info(f"Validation failed: {str(e)}") raise except DatabaseError as e: # Wrap in a different exception for the framework logger.error(f"Database error: {str(e)}") raise SystemError("Unable to create user") from e
```

This code has several problems that make it difficult to maintain and reason about:

### 1. Hidden Control Flow

Exceptions create invisible paths through your code. When reading the "happy path", it's not obvious what might fail and how those failures are handled. In the example above, there are at least five different paths through the function, but they're not immediately apparent.

### 2. Mixed Error Types

The code uses the same mechanism (exceptions) to handle different types of errors:

* Missing or invalid input (expected business case)
* Database failures (technical error)
* Email sending failures (downstream system error)

This makes it harder to handle each type appropriately.

### 3. Ambiguous Partial Success

What happens if the user is created but the welcome email fails? The code catches the `SMTPError`, but it's not clear what the right behavior is. Should we:

* Roll back the user creation?
* Return success anyway?
* Return a partial success?

The exception pattern makes this ambiguity easy to create but hard to resolve.

### 4. Unclear Function Contract

Looking at the function signature:

```python
def register_user(request_data: dict) -> User:
```

There's no indication that this function might raise `ValidationError`, `SystemError`, or silently swallow `SMTPError`. The only way to know is to read the implementation or hope for good documentation.

### 5. Testing Challenges

Testing exception-based code often requires complex setup with mocks and try/except blocks and fishing for strings in error messages:

```python
def test_register_user_invalid_email(): with pytest.raises(ValidationError) as exc_info: register_user({"email": "invalid", "password": "password123"}) assert "Invalid email format" in str(exc_info.value)
```

### 6. Client Code Becomes Complex

Let's look at how this affects the code that calls our registration function. Here's a typical web endpoint:

```python
@app.route('/api/register', methods=['POST'])def register_endpoint(): try: # Attempt registration user = register_user(request.get_json()) # If we get here, assume success return jsonify({ "status": "success", "user_id": user.id }), 201 except ValidationError as e: # Handle expected validation failures return jsonify({ "status": "error", "type": "validation", "message": str(e) }), 400 except SystemError as e: # Handle system-level failures return jsonify({ "status": "error", "type": "system", "message": "Registration failed due to system error" }), 500 except Exception as e: # Handle unexpected errors logger.error(f"Unexpected error during registration: {str(e)}") return jsonify({ "status": "error", "type": "unknown", "message": "An unexpected error occurred" }), 500
```

This client code has several issues:

1. **Exception Type Coupling**: The client needs to know about and handle multiple exception types (`ValidationError`, `SystemError`, etc.)
2. **Catch-All Required**: It must catch `Exception` to handle unexpected errors safely, which can hide programming errors
3. **Limited Error Context**: It can't distinguish between different validation error types (email taken vs invalid format)
4. **Missing Success Context**: It has no way to know if the welcome email was sent
5. **Split Error Handling**: The success/failure paths are split across different code blocks
6. **Repetitive Response Structure**: Each error case requires a similar but slightly different JSON response construction
7. **Hidden Error Cases**: Looking at the function signature, you can't tell what exceptions might be thrown

### 7. Error Recovery is Hard

Once an exception is thrown, it's challenging to recover partial work or provide multiple error details. For example, if both the email and password are invalid, we can only report one error at a time.

## Introducing Result Objects: A Better Way

Result objects provide a solution to these problems by explicitly representing either success or failure. The interface is intentionally simple a success/failure flag paired with a value. This clarity makes it immediately obvious whether an operation succeeded and what data or error it produced.

Let's look at our Result implementation:

```python
@dataclassclass RegistrationError: # in a more extensive example, code could be an Enum code: str message: str@dataclassclass Result(Generic[T, E]): value: Union[T, E] is_success: bool @classmethod def success(cls, value: T) -> 'Result[T, E]': return cls(value, True) @classmethod def failure(cls, error: E) -> 'Result[T, E]': return cls(error, False)
```

The benefit of this design is its explicitness. There's no ambiguity about the outcome `is_success` tells us immediately whether we have a valid result or an error. The [generic](https://docs.python.org/3/library/typing.html#generics) types `T` and `E` ensure we handle both cases correctly at compile time. This is a significant improvement over exceptions, where the success type is known but possible errors are invisible in the function signature.

Now lets look at the `register_user` method reimplemented using a Result object.

```python
def register_user(request_data: dict) -> Result[User, RegistrationError]: # Validate email email_result = validate_email(request_data.get('email')) if not email_result.is_success: return email_result # Validate password password_result = validate_password(request_data.get('password')) if not password_result.is_success: return password_result # Check email availability email = email_result.value if User.objects.filter(email=email).exists(): return Result.failure(RegistrationError( code="email_taken", message="Email already registered" )) # Create user try: user = User.objects.create( email=email, password=hash_password(password_result.value) ) except DatabaseError: return Result.failure(RegistrationError( code="system_error", message="Unable to create user" )) # Send welcome email email_result = send_welcome_email(user) # Return success with information about email status return Result.success({ "user": user, "email_sent": email_result.is_success })
```

There's a clear pattern to error handlingwe check each Result before proceeding. No more jumping between try/except blocks or wondering about error propagation. The code reads like a checklist:

* Validate email? or return error
* Validate password? or return error
* Check email availability? or return error
* Create the user? or return error

Let's examine how this addresses our previous problems:

### 1. Explicit Control Flow

The code's flow is now linear and explicit. Each step either succeeds and continues or fails and returns. There's no need to trace exception handling blocks to understand the flow.

### 2. Clear Error Types

Business logic errors (invalid input) return `Result.failure`, while true exceptions (database errors) are caught and converted to Results. This separation clarifies the code's intent.

### 3. No Partial State Ambiguity

The success case explicitly includes information about what succeeded and what failed. There's no ambiguity about partial success states.

Here's how we can handle partial success states clearly with Result objects:

```python
@dataclassclass RegistrationSuccess: user: User welcome_email_sent: bool verification_email_sent: booldef register_user(data: dict) -> Result[RegistrationSuccess, RegistrationError]: # ... user creation code ... # Track what succeeded welcome_sent = send_welcome_email(user).is_success verify_sent = send_verification_email(user).is_success return Result.success(RegistrationSuccess( user=user, welcome_email_sent=welcome_sent, verification_email_sent=verify_sent ))
```

The client can now make informed decisions based on exactly what succeeded:

```python
result = register_user(data)if result.is_success: if not result.value.welcome_email_sent: queue_email_retry(result.value.user.id, "welcome") if not result.value.verification_email_sent: queue_email_retry(result.value.user.id, "verify")
```

### 4. Self-Documenting Interface

The function signature:

```python
def register_user(request_data: dict) -> Result[User, RegistrationError]:
```

Clearly shows that this function might fail and what type of errors to expect.

### 5. Easier Testing

Testing becomes straightforward without a need for exception handling:

```python
def test_register_user_invalid_email(): result = register_user({"email": "invalid", "password": "password123"}) assert not result.is_success assert result.value.code == "invalid_email"
```

### 6. Better Error Aggregation

We can easily collect multiple errors:

```python
def validate_registration(data: dict) -> Result[dict, list[RegistrationError]]: errors = [] email_result = validate_email(data.get('email')) if not email_result.is_success: errors.append(email_result.value) password_result = validate_password(data.get('password')) if not password_result.is_success: errors.append(password_result.value) if errors: return Result.failure(errors) return Result.success(data)
```

### Client code improvements

Now let's look at how this improves our client code. Instead of the complex exception handling we saw earlier, our registration endpoint becomes:

```python
@app.route('/api/register', methods=['POST'])def register_endpoint(): # Attempt registration result = register_user(request.get_json()) if result.is_success: user_data = result.value return jsonify({ "status": "success", "user_id": user_data["user"].id, "email_sent": user_data["email_sent"] # We can include additional context }), 201 # Handle error cases error = result.value if error.code in ("invalid_email", "invalid_password", "email_taken"): status_code = 400 else: status_code = 500 return jsonify({ "status": "error", "code": error.code, "message": error.message }), status_code
```

The Result-based client code is superior because:

1. **Explicit Error Handling**: All paths through the code are clear and visible
2. **Centralized Logic**: Error handling is consolidated in one place
3. **Rich Error Context**: Different types of errors can be distinguished by their error codes
4. **Rich Success Context**: Additional metadata (like email\_sent status) can be included in the success case
5. **Self-Documenting**: The function signature shows exactly what can go wrong
6. **No Exception Handling**: No need to catch unexpected exceptions (they indicate programming errors that should be fixed)
7. **Consistent Structure**: Both success and error responses follow a consistent pattern

You can also easily chain multiple operations:

```python
@app.route('/api/register', methods=['POST'])def register_endpoint(): # Validate request validation_result = validate_request(request) if not validation_result.is_success: return create_error_response(validation_result.value) # Register user registration_result = register_user(validation_result.value) if not registration_result.is_success: return create_error_response(registration_result.value) # Create profile profile_result = create_user_profile(registration_result.value["user"]) if not profile_result.is_success: return create_error_response(profile_result.value) # Return success response with all context return jsonify({ "status": "success", "user_id": registration_result.value["user"].id, "email_sent": registration_result.value["email_sent"], "profile_id": profile_result.value.id }), 201
```

## When Exceptions Still Make Sense

While Result objects excel at handling business logic, you'll still encounter exceptions in your code base.

### 1. Third party libraries

When leveraging third-party libraries, they will quite often rely on exceptions. The key is to convert these exceptions to Results at your system boundaries.

For example, when working with an email service:

```python
class EmailService: def send_welcome_email(self, user: User) -> Result[bool, str]: try: self.email_client.send( # Third-party client that throws exceptions template="welcome", to=user.email, data={"name": user.name} ) return Result.success(True) except EmailClientError as e: return Result.failure(f"Failed to send welcome email: {str(e)}")
```

### 2. main.py

At the top level of your application, you'll still want exception handling to ensure graceful shutdown and proper logging. This creates a safe boundary around your Result-based core:

```python
def main(): try: setup_services() run_application() except Exception as e: logger.critical(f"Fatal error: {str(e)}") cleanup_resources() sys.exit(1)
```

### 3. System-Level Failures

These are conditions where your application cannot reasonably continue:

* Database connection failures
* Out of memory conditions
* Configuration errors
* Critical service dependencies being unavailable

```python
def connect_to_database() -> Connection: try: return database.connect(DATABASE_URL) except ConnectionError as e: # No point wrapping this in a Result - the app can't function raise SystemError("Cannot connect to database") from e
```

### 4. Programming Errors

These are *sanity gates* you see in place to protect against bugs that should be fixed rather than handled:

```python
class UserSession: def __init__(self, user: User): self._user = user self._preferences = None def get_preferences(self) -> dict: if self._user is None: # This should be impossible given our constructor raise RuntimeError("UserSession has null user - this indicates a bug") if self._preferences is None: # This should be impossible after initialization raise RuntimeError("Preferences not loaded - did you forget to call load_preferences()?") return self._preferences
```

## Conclusion

Error handling might not be the most exciting part of software development, but getting it right has a massive impact on code quality. Result objects provide a clear path toward better error handling by making success and failure explicit in your code.

They solve many common problems with exception-based code: hidden control flow becomes visible, error handling becomes centralized, and partial successes become manageable. The improved testing and self-documenting interfaces are valuable bonuses that make maintenance easier.

While you'll still use exceptions for truly exceptional cases system failures and programming errors Result objects should be your default choice for handling business logic errors. They create a clear boundary between expected failures that your code should handle and unexpected failures that indicate bugs or system problems.

By adopting Result objects, you're not just choosing a different error handling mechanism you're choosing to make error handling a first-class concern in your codebase. The result is code that's more explicit, easier to understand, and more maintainable.

### Where to Go From Here

Ready to level up your error handling? Here are some next steps:

* Start with a simple Result implementation in your next project
* Look for places in your existing code where exceptions are being used for business logic
* Consider extending this pattern with rich error types to add even more structure to your error handling
* Share your experiences with your teamerror handling patterns work best when adopted consistently