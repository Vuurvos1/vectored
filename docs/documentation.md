# Vecjs - A 2D and 3D JavaScript library for common vector operations

- Constructors

  - [new Vec]()
  - [Vec from array]()
  - [Vec from object]()

  - [.up]()
  - [.left]()
  - [.down]()
  - [.right]()
  - [.forward]()
  - [.back]()
  - [.one]()
  - [.zero]()

- Porperties

  - x
  - y
  - z

- Utility

  - .copy

  - .toObject
  - .toArray
  - .toString

- Manipulation

  - [.add]()
  - .subtract
  - .multiply
  - .divide

  - .negative
  - .normalize

- Products

  - .length
  - .magnitude
  - .mag
  - .lengthSq
  - .setMag

## Vec(x, y, z)

Constructor. Will also work without the `new` keyword

### Examples:

    let vec1 = new Vec(100, 50);
    let vec2 = Vec(4, 2, 0);

### Params:

- **Number** _x_ Value of the x axis
- **Number** _y_ Value of the y axis
- **Number** _z_ Value of the z axis

### Return:

- **Vec**

## add(vector)

Add two vectors together

### Examples:

    let vec1 = new Vec(1, 5, 2);
    let vec2 = new Vec(8, 3, 3);

    vec1.add(vec2);
    vec1.toObject();
    // => {x: 9, y: 8, z: 5}

### Params:

- **Vec** _vector_ The other vector you want to add to this one

### Return:

- **Vec** New Vec instance
