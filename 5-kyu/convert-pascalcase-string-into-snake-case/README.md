## Convert PascalCase string into snake_case

> url: <https://www.codewars.com/kata/529b418d533b76924600085d>

### Description:

Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.

Examples:

```ruby
# returns test_controller
to_underscore('TestController')

# returns movies_and_books
to_underscore('MoviesAndBooks')

# returns app7_test
to_underscore('App7Test')

# returns "1"
to_underscore(1)
```

```javascript
//  returns test_controller
toUnderscore('TestController');

// returns movies_and_books
toUnderscore('MoviesAndBooks');

// returns app7_test
toUnderscore('App7Test');

// returns "1"
toUnderscore(1);
```

```coffeescript
#  returns test_controller
toUnderscore 'TestController'

# returns movies_and_books
toUnderscore 'MoviesAndBooks'

# returns app7_test
toUnderscore 'App7Test'

# returns "1"
toUnderscore 1
```

```csharp
//returns test_controller
Kata.ToUnderscore("TestController");

//movies_and_books
Kata.ToUnderscore("MoviesAndBooks");
```

### Solutions:

- [ ] [ruby]()
- [x] [javascript](./01-solution.js)
- [ ] [coffeescript]()
- [ ] [python]()
- [ ] [csharp]()
