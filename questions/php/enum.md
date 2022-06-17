# Enumeration

# Index

- [Definition](#definition)
- [Example](#example)
- [Resources](#resources)
- [Notes](#notes)

# Definition

- Enums, in Java, are special classes that represent a group of constants.Enum is short for "enumerations", which means "specifically listed". They are mainly used to assign names to integral constants, the names make a program easy to read and maintain.

Use Case: Use enums when you have values that you know aren't going to change, like month days, days, colors, deck of cards, etc.

# Example

```php

abstract class gfg {
    const dummy_string = "geeksforgeeks";
    const dummy_int    = 1;
    const dummy_array  = array('a' => 1, 'b' => 2);
}

$a = gfg::dummy_string;
$b = gfg::dummy_int;
$c = gfg::dummy_array;

var_dump($a);
var_dump($b);
var_dump($c);

```

# Resources

- [Geek Example](https://www.geeksforgeeks.org/enumerations-in-php/)
- [Java Example of enums](https://www.w3schools.com/java/java_enums.asp)

# Notes
