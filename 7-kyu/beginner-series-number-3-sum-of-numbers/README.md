## Beginner Series #3 Sum of Numbers

> url: <https://www.codewars.com/kata/55f2b110f61eb01779000053>

### Description:

Given two integers `a` and `b`, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return `a` or `b`.

**Note:** `a` and `b` are not ordered!

## Examples

```javascript
GetSum(1, 0) == 1; // 1 + 0 = 1
GetSum(1, 2) == 3; // 1 + 2 = 3
GetSum(0, 1) == 1; // 0 + 1 = 1
GetSum(1, 1) == 1; // 1 Since both are same
GetSum(-1, 0) == -1; // -1 + 0 = -1
GetSum(-1, 2) == 2; // -1 + 0 + 1 + 2 = 2
```

```crystal
get_sum(1, 0) == 1   # 1 + 0 = 1
get_sum(1, 2) == 3   # 1 + 2 = 3
get_sum(0, 1) == 1   # 0 + 1 = 1
get_sum(1, 1) == 1   # 1 Since both are same
get_sum(-1, 0) == -1 # -1 + 0 = -1
get_sum(-1, 2) == 2  # -1 + 0 + 1 + 2 = 2
```

```coffeescript
getSum(1, 0) == 1   // 1 + 0 = 1
getSum(1, 2) == 3   // 1 + 2 = 3
getSum(0, 1) == 1   // 0 + 1 = 1
getSum(1, 1) == 1   // 1 Since both are same
getSum(-1, 0) == -1 // -1 + 0 = -1
getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
```

```java
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
```

```csharp
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
```

```python
get_sum(1, 0) == 1   // 1 + 0 = 1
get_sum(1, 2) == 3   // 1 + 2 = 3
get_sum(0, 1) == 1   // 0 + 1 = 1
get_sum(1, 1) == 1   // 1 Since both are same
get_sum(-1, 0) == -1 // -1 + 0 = -1
get_sum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
```

```ruby
get_sum(1, 0) == 1   # 1 + 0 = 1
get_sum(1, 2) == 3   # 1 + 2 = 3
get_sum(0, 1) == 1   # 0 + 1 = 1
get_sum(1, 1) == 1   # 1 Since both are same
get_sum(-1, 0) == -1 # -1 + 0 = -1
get_sum(-1, 2) == 2  # -1 + 0 + 1 + 2 = 2
```

```C
get_sum(1, 0) == 1   // 1 + 0 = 1
get_sum(1, 2) == 3   // 1 + 2 = 3
get_sum(0, 1) == 1   // 0 + 1 = 1
get_sum(1, 1) == 1   // 1 Since both are same
get_sum(-1, 0) == -1 // -1 + 0 = -1
get_sum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
```

```cpp
get_sum(1, 0) == 1   // 1 + 0 = 1
get_sum(1, 2) == 3   // 1 + 2 = 3
get_sum(0, 1) == 1   // 0 + 1 = 1
get_sum(1, 1) == 1   // 1 Since both are same
get_sum(-1, 0) == -1 // -1 + 0 = -1
get_sum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
```

```r
get_sum(1, 0) == 1   # 1 + 0 = 1
get_sum(1, 2) == 3   # 1 + 2 = 3
get_sum(0, 1) == 1   # 0 + 1 = 1
get_sum(1, 1) == 1   # 1 Since both are same
get_sum(-1, 0) == -1 # -1 + 0 = -1
get_sum(-1, 2) == 2  # -1 + 0 + 1 + 2 = 2
```

```nasm
mov edi, 1
mov esi, 0
call get_sum    ; EAX <- 1 = 1 + 0

mov edi, 1
mov esi, 2
call get_sum    ; EAX <- 3 = 1 + 2

mov edi, 0
mov esi, 1
call get_sum    ; EAX <- 1 = 0 + 1
```

```fsharp
getSum 1 0 == 1   // 1 + 0 = 1
getSum 1 2 == 3   // 1 + 2 = 3
getSum 0 1 == 1   // 0 + 1 = 1
getSum 1 1 == 1   // 1 Since both are same
getSum -1 0 == -1 // -1 + 0 = -1
getSum -1 2 == 2  // -1 + 0 + 1 + 2 = 2
```

```julia
getsum(1, 0) == 1   # 1 + 0 = 1
getsum(1, 2) == 3   # 1 + 2 = 3
getsum(0, 1) == 1   # 0 + 1 = 1
getsum(1, 1) == 1   # 1 Since both are same
getsum(-1, 0) == -1 # -1 + 0 = -1
getsum(-1, 2) == 2  # -1 + 0 + 1 + 2 = 2
```

```prolog
get_sum(1, 0, 1) % 1 + 0 = 1
get_sum(1, 2, 3) % 1 + 2 = 3
get_sum(0, 1, 3) % 0 + 1 = 1
get_sum(1, 1, 1)  % 1 Since both are same
get_sum(-1, 0, -1) % -1 + 0 = -1
get_sum(-1, 2, 2) % -1 + 0 + 1 + 2 = 2
```

```scala
getSum(1, 0) == 1   // 1 + 0 = 1
getSum(1, 2) == 3   // 1 + 2 = 3
getSum(0, 1) == 1   // 0 + 1 = 1
getSum(1, 1) == 1   // 1 Since both are same
getSum(-1, 0) == -1 // -1 + 0 = -1
getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
```

```pascal
GetSum(1, 0) = 1   // 1 + 0 = 1
GetSum(1, 2) = 3   // 1 + 2 = 3
GetSum(0, 1) = 1   // 0 + 1 = 1
GetSum(1, 1) = 1   // 1 Since both are same
GetSum(-1, 0) = -1 // -1 + 0 = -1
GetSum(-1, 2) = 2  // -1 + 0 + 1 + 2 = 2
```

### Solutions:

- [ ] [csharp]()
- [ ] [java]()
- [ ] [python]()
- [x] [javascript](./01-solution.js)
- [ ] [coffeescript]()
- [ ] [ruby]()
- [ ] [typescript]()
- [ ] [c]()
- [ ] [r]()
- [ ] [nasm]()
- [ ] [fsharp]()
- [ ] [haskell]()
- [ ] [julia]()
- [ ] [prolog]()
- [ ] [scala]()
- [ ] [cpp]()
- [ ] [pascal]()
- [ ] [crystal]()
