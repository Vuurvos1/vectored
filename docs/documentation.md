# Vectored - A 2D and 3D JavaScript library for common vector operations

- Constructors

  - [new Vec](#vecx-y-z)
  - [Vec from array](#Vec-from-array)
  - [Vec from object](#Vec-from-object)
  - [Vec from angle](#Vec-from-angle)
  - [Vec from angles](#Vec-from-angles)

  - [.up](#-up)
  - [.left](#-left)
  - [.down](#-down)
  - [.right](#-right)
  - [.forward](#-forward)
  - [.back](#-back)
  - [.one](#-one)
  - [.zero](#-zero)

  - [.random2D](#-random2D)
  - [.random3D](#-random3D)

- Porperties

  - x
  - y
  - z

- Utility

  - .copy

  - [.toObject](#-toObject)
  - [.toArray](#-toArray)
  - [.toString](#-toString)

- Manipulation

  - [.add](#add-vector)
  - [.subtract](#subtract-vector)
  - [.multiply](#multiply-vector)
  - [.divide](#divide-vector)
  - .remainder

  - [.negative](#negative)
  - [.normalize](#normalize)
  - rotate

- Products

  - [.length](#length)
  - [.magnitude](#magnitude)
  - [.lengthSq](#lengthSq)
  - [.setMag](#setMag)
  - [.dot](#dot-product)
  - [.cross](#cross-product)

  - .distance
  - .distanceSq
  - .horizontalAngle

# Constructors

## Vec(x, y, z)

Constructor. Will also work without the `new` keyword

### Examples:

```js
let vec1 = new Vec(100, 50)
let vec2 = Vec(4, 2, 0)
```

### Params:

- **Number** _x_ Value of the x axis
- **Number** _y_ Value of the y axis
- **Number** _z_ Value of the z axis

### Return:

- **Vec**

## Vec from array

Create a vector from an array

### Examples:

```js
let array = [10, 20, 0]
let vector = new Vec.fromArray(array)

vector.toObject()
// => { x: 10, y: 20, z: 0 }
```

### Params:

- **Array** _arr_ Array containing x, y and z if not the value will be a 0

### Return:

- **Vec**

## Vec from object

Turn the x, y and z components of an object into a Vector

### Examples:

```js
let vector = new Vec({ x: 10, y: 20, z: 3 })

vector.toObject()
// => { x: 10, y: 20, z: 3 }
```

### Params:

- **Object** _obj_ Object containing x, y and z if not the value will be a 0

### Return:

- **Vec**

## Vec from angle

Create a vector from a 2D angle

### Examples:

```js
let vector = new Vec(1, 3)

vector.toObject()
// => {x: 1.621, y: 2.524, z: 0}
```

### Params:

- **Number** _angle_ desired angle in radians
- **Number** _length_ length of the new vector (defaults to 1)

### Return:

- **Vec** New vec instance

## Vec from angles

Create a vector from a a pair of ISO spherical angles

### Examples:

```js
let vector = new Vec(1.5, 2, 5)

vector.toObject()
// => {x: 4.535, y: -0.353, z: -2.075}
```

### Params:

- **Number** _theta_ polar angle, in radians (zero is up)
- **Number** _phi_ azimuthal angle, in radians
- **Number** _length_ of the new vector (defaults to 1)

### Return:

- **Vec** New vec instance

## .up

Return a vector that faces up

### Examples:

```js
let vector = new Vec.up()

vector.toObject()
// => { x: 0, y: 1, z: 0 }
```

### Return:

- **Vec**

## .left

Returns a vector that faces left

### Examples:

```js
let vector = new Vec.left()

vector.toObject()
// => { x: -1, y: 0, z: 0 }
```

### Return:

- **Vec**

## .down

Returns a vector that faces down

### Examples:

```js
let vector = new Vec.down()

vector.toObject()
// => { x: 0, y: -1, z: 0 }
```

### Return:

- **Vec**

## .right

Returns a vector that faces right

### Examples:

```js
let vector = new Vec.right()

vector.toObject()
// => { x: 1, y: 0, z: 0 }
```

### Return:

- **Vec**

## .forward

Returns a vector that faces forward

### Examples:

```js
let vector = new Vec.forward()

vector.toObject()
// => { x: 0, y: 0, z: 1 }
```

### Return:

- **Vec**

## .back

Returns a vector that faces backwards

### Examples:

```js
let vector = new Vec.back()

vector.toObject()
// => { x: 0, y: 0, z: -1 }
```

### Return:

- **Vec**

## .one

Returns a vector containing all ones

- ### Examples:

```js
let vector = new Vec.one()

vector.toObject()
// => { x: 1, y: 1, z: 1 }
```

### Return:

- **Vec**

## .zero

Returns a vector containing all zeros

### Examples:

```js
let vector = new Vec.up()

vector.toObject()
// => { x: 0, y: 0, z: 0 }
```

### Return:

- **Vec**

# Utility

## .toObject

Return an object representing the vector

### Examples:

```js
let vector = new Vec(10, 20)

vector.toObject()
// => { x: 10, y: 20, z: 0 }
```

### Return:

- **Object** Object representing the vector

## .toArray

Returns an array representing the vector

### Examples:

```js
let vector = new Vec(10, 20)

vector.toArray()
// => [10, 20, 0]
```

### Return:

- **Array** Array representing the vector

## .toString

Returns a string representing the vector

### Examples:

```js
let vector = new Vec(10, 20)

vector.toObject()
// => '(10, 20, 0)'
```

### Return:

- **String** String representing the vector

# Manipulation

## Add (vector)

Add two vectors together

### Examples:

```js
let vec1 = new Vec(1, 5, 2)
let vec2 = new Vec(8, 3, 3)

vec1.add(vec2)
vec1.toObject()
// => {x: 9, y: 8, z: 5}
```

### Params:

- **Vec** _vector_ The other vector you want to add to this one

### Return:

- **Vec** New Vec instance

## Subtract (vector)

Subtract two vectors from one another

### Examples:

```js
let vec1 = new Vec(2, 5, 3)
let vec2 = new Vec(1, 3, 2)

vec1.subtract(vec2)
vec1.toObject()
// => {x: 1, y: 2, z: 1}
```

### Params:

- **Vec** _vector_ The other vector you want to subtract to this one

### Return:

- **Vec** New Vec instance

## Multiply (vector)

Multiply two vectors by one another

### Examples:

```js
let vec1 = new Vec(2, 8, 1)
let vec2 = new Vec(4, 2, 3)

vec1.multiply(vec2)
vec1.toObject()
// => {x: 8, y: 16, z: 3}
```

### Params:

- **Vec** _vector_ The other vector you want to multiply by

### Return:

- **Vec** New Vec instance

## Divide (vector)

Divide two vectors by one another

### Examples:

```js
let vec1 = new Vec(5, 10, 9)
let vec2 = new Vec(2, 5, 3)

vec1.divide(vec2)
vec1.toObject()
// => {x: 2.5, y: 2, z: 3}
```

### Params:

- **Vec** _vector_ The other vector you want to divide by

### Return:

- **Vec** New Vec instance

## negative

Get the negative of a vector

### Examples:

```js
let vector = new Vec(2, -1, 5)

vector.negative()
vector.toObject()
// => {x: -2, y: 1, z: -5}
```

### Return:

- **Vec** New Vec instance

## normalize

Normalize the vector lenght to 1

### Examples:

```js
let vector = new Vec(4, 6, 5)

vector.normalize()
vector.toObject()
// => {x: 0.455, y: 0.683, z: 0.569}
```

### Return:

- **Vec** New Vec instance

# Products

## length

Get the length / magnitude of a vector

### Examples:

```js
let vector = new Vec(3, 4, 0)

vector.length()
// => 5
```

### Return:

- **Number** Length / Magnitude of vector

## magnitude

Alias for [length](#length)

## lengthSq

Get the squared lenght / magnitude of a Vector

### Examples:

```js
let vector = new Vec(3, 4, 0)

vector.lengthSq()
// => 25
```

### Return:

- **Number** Squared lenght / magnitude of the vector

## setMag

Set the magnitude of the vector

### Examples:

```js
let vector = new Vec(4, 6, 5)

vector.setMag(4)
vector.toObject()
// => {x: 1.823, y: 2.735, z: 2.279}
```

### Params:

- **Number** _n_ The length you want the vector to be

### Return:

- **Vec** New Vec instance

## dot product

Calculates the dot product of the vector and another

### Examples:

```js
let vec1 = new Vec(100, 50)
let vec2 = new Vec(200, 60)

vec1.dot(vec2)
// => 23000
```

### Params:

- **Vec** _v_ The second vector

### Return:

- **Number** Dot product

## cross product

Calculates the cross product of the vector and another

### Examples:

```js
let vec1 = new Vec(100, 50)
let vec2 = new Vec(200, 60)

vec1.dot(vec2)
// => 17000
```

### Params:

- **Vec** _v_ The second vector

### Return:

- **Number** Cross product
