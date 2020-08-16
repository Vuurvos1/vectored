(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['b'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node.
    // module.exports = factory(require('b'));
    exports = module.exports = Vec;
  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.b);
  }
}(typeof self !== 'undefined' ? self : this, function(b) {
  // Use b in some fashion.

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return {};
}));

/**
 * # Vectored - A JavaScript 2 and 3D vector math library
 */

const _pi = Math.PI;
const twoPi = _pi * 2;

/**
 * Constructor. Will also work without the `new` keyword
 *
 * ### Examples:
 *     let vec1 = new vec(100, 50);
 *     let vec2 = vec(42, 1337);
 *
 * @param {Number} x Value of the x axis
 * @param {Number} y Value of the y axis
 * @param {Number} z Value of the z axis
 * @return {Vec}
 * @api public
 */
function Vec(x, y, z) {
  if (!(this instanceof Vec)) {
    return new Vec(x, y, z);
  }

  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

/**
 * Returns a vector that faces up
 *
 * ### Examples:
 *     let vector = new Vec.up();
 *
 *     vector.toObject();
 *     // => { x: 0, y: 1, z: 0 }
 *
 * @return {Vec} New Vec instance
 * @api public
 */
Vec.up = function() {
  return new Vec(0, 1, 0);
};

/**
 * Returns a vector that faces left
 *
 * ### Examples:
 *     let vector = new Vec.left();
 *
 *     vector.toObject();
 *     // => { x: -1, y: 0, z: 0 }
 *
 * @return {Vec} New Vec instance
 * @api public
 */
Vec.left = function() {
  return new Vec(-1, 0, 0);
};

/**
 * Returns a vector that faces down
 *
 * ### Examples:
 *     let vector = new Vec.down();
 *
 *     vector.toObject();
 *     // => { x: 0, y: -1, z: 0 }
 *
 * @return {Vec} New Vec instance
 * @api public
 */
Vec.down = function() {
  return new Vec(0, -1, 0);
};

/**
 * Returns a vector that faces right
 *
 * ### Examples:
 *     let vector = new Vec.right();
 *
 *     vector.toObject();
 *     // => { x: 1, y: 0, z: 0 }
 *
 * @return {Vec} New Vec instance
 * @api public
 */
Vec.right = function() {
  return new Vec(1, 0, 0);
};

/**
 * Returns a vector that faces forward
 *
 * ### Examples:
 *     let vector = new Vec.forward();
 *
 *     vector.toObject();
 *     // => { x: 0, y: 0, z: 1 }
 *
 * @return {Vec} New Vec instance
 * @api public
 */
Vec.forward = function() {
  return new Vec(0, 0, 1);
};

/**
 * Returns a vector that faces backwards
 *
 * ### Examples:
 *     let vector = new Vec.back();
 *
 *     vector.toObject();
 *     // => { x: 0, y: 0, z: -1 }
 *
 * @return {Vec} New Vec instance
 * @api public
 */
Vec.back = function() {
  return new Vec(0, 0, -1);
};

/**
 * Returns a vector containing all ones
 *
 * ### Examples:
 *     let vector = new Vec.one();
 *
 *     vector.toObject();
 *     // => { x: 1, y: 1, z: 1 }
 *
 * @return {Vec} New Vec instance
 * @api public
 */
Vec.one = function() {
  return new Vec(1, 1, 1);
};

/**
 * Returns a vector containing all zeros
 *
 * ### Examples:
 *     let vector = new Vec.up();
 *
 *     vector.toObject();
 *     // => { x: 0, y: 0, z: 0 }
 *
 * @return {Vec} New Vec instance
 * @api public
 */
Vec.zero = function() {
  return new Vec(0, 0, 0);
};

/**
 * Create a vector from an array
 *
 * ### Examples:
 *     let array = [10, 20, 0]
 *     let vector = new Vec.fromArray(array);
 *
 *     vector.toObject();
 *     // => { x: 10, y: 20, z: 0 }
 *
 * @name Vec.fromArray
 * @param {arr} arr Array containing x, y and z if not the value will be a 0
 * @return {Vec} New Vec instance
 * @api public
 */
Vec.fromArray = function(arr) {
  return new Vec(arr[0] || 0, arr[1] || 0, arr[2] || 0);
};

/**
 * Turn the x, y and z components of an object into a Vector
 *
 * ### Examples:
 *     let vector = new Vec({x: 10, y: 20, z:3});
 *
 *     vector.toObject();
 *     // => { x: 10, y: 20, z: 3 }
 *
 * @name Vec.formObject
 * @param {obj} obj Object containing x, y and z if not the value will be a 0
 * @return {Vec} New Vec instance
 * @api public
 */
Vec.formObject = function(obj) {
  return new Vec(obj.x || 0, ojb.y || 0, obj.z || 0);
};


/**
 * Returns an object representing the vector
 *
 * ### Examples:
 *     let vector = new Vec(10, 20);
 *
 *     vector.toObject();
 *     // => { x: 10, y: 20, z: 0 }
 *
 * @return {Object} Object representing the vector
 * @api public
 */
Vec.prototype.toObject = function() {
  return {x: this.x, y: this.y, z: this.z};
};

/**
 * Returns an array representing the vector
 *
 * ### Examples:
 *     let vector = new Vec(10, 20);
 *
 *     vector.toArray();
 *     // => [10, 20, 0]
 *
 * @return {Array} Array representing the vector
 * @api public
 */
Vec.prototype.toArray = function() {
  return [this.x, this.y, this.z];
};

/**
 * Returns a string representing the vector
 *
 * ### Examples:
 *     let vector = new Vec(10, 20);
 *
 *     vector.toObject();
 *     // => '(10, 20, 0)'
 *
 * @return {String} String representing the vector
 * @api public
 */
Vec.prototype.toString = function() {
  return `(${this.x}, ${this.y}, ${this.z})`;
};


/**
 * Add two vectors together
 *
 * ### Examples:
 *  let vec1 = new Vec(1, 5, 2);
 *  let vec2 = new Vec(8, 3, 3);
 *
 *  vec1.add(vec2);
 *  vec1.toObject();
 *  // => {x: 9, y: 8, z: 5}
 *
 * @param {v} v The other vector you want to add to this one
 * @return {Vec} New Vec instance
 * @api public
 */
Vec.prototype.add = function(v) {
  if (v instanceof Vec) {
    return new Vec(this.x += v.x, this.y += v.y, this.z += v.z);
  } else {
    return new Vec(this.x += v, this.y += v, this.z += v);
  }
};

/**
 * Subtract two vectors from one another
 *
 * ### Examples:
 *     let vec1 = new Vec(2, 5, 3);
 *     let vec2 = new Vec(1, 3, 2);
 *
 *     vec1.subtract(vec2);
 *     vec1.toObject();
 *     // => {x: 1, y: 2, z: 1}
 *
 * @param {v} v The other vector you want to subtract to this one
 * @return {Vec} `this` for chaining capabilities
 * @api public
 */
Vec.prototype.subtract = function(v) {
  if (v instanceof Vec) {
    return new Vec(this.x -= v.x, this.y -= v.y, this.z -= v.z);
  } else {
    return new Vec(this.x -= v, this.y -= v, this.z -= v);
  }
};

/**
 * Multiply two vectors by one another
 *
 * ### Examples:
 *     let vec1 = new Vec(2, 8, 1);
 *     let vec2 = new Vec(4, 2, 3);
 *
 *     vec1.multiply(vec2);
 *     vec1.toObject();
 *     // => {x: 8, y: 16, z: 3}
 *
 * @param {v} v The other vector you want to multiply by
 * @return {Vec} New Vec instance
 * @api public
 */
Vec.prototype.multiply = function(v) {
  if (v instanceof Vec) {
    return new Vec(this.x *= v.x, this.y *= v.y, this.z *= v.z);
  } else {
    return new Vec(this.x *= v, this.y *= v, this.z *= v);
  }
};

/**
 * Divide two vectors by one another
 *
 * ### Examples:
 *     let vec1 = new Vec(5, 10, 9);
 *     let vec2 = new Vec(2, 5, 3);
 *
 *     vec1.divide(vec2);
 *     vec1.toObject();
 *     // => {x: 2.5, y: 2, z: 3}
 *
 * @param {v} v The other vector you want to divide by
 * @return {Vec} New Vec instance
 * @api public
 */
Vec.prototype.divide = function(v) {
  if (v instanceof Vec) {
    return new Vec(this.x /= v.x, this.y /= v.y, this.z /= v.z);
  } else {
    return new Vec(this.x /= v, this.y /= v, this.z /= v);
  }
};

/**
 * Create a vector from a 2D angle
 *
 * ### Examples:
 *     let vector = new Vec(1, 3);
 *
 *     vector.toObject();
 *     // => {x: 1.621, y: 2.524, z: 0}
 *
 * @param {Number} angle desired angle in radians
 * @param {Number} length length of the new vector (defaults to 1)
 * @return {Vec} `this` for chaining capabilities
 * @api public
 */
Vec.fromAngle = function fromAngle(angle, length) {
  if (typeof length === 'undefined') {
    length = 1;
  }
  return new Vec(length * Math.cos(angle), length * Math.sin(angle), 0);
};

/**
 * Create a vector from a a pair of ISO spherical angles
 *
 * ### Examples:
 *     let vector = new Vec(1.5, 2, 5);
 *
 *     vector.toObject();
 *     // => {x: 4.535, y: -0.353, z: -2.075}
 *
 * @param {Number} theta polar angle, in radians (zero is up)
 * @param {Number} phi azimuthal angle, in radians
 * @param {Number} length length of the new vector (defaults to 1)
 * @return {Vec} `this` for chaining capabilities
 * @api public
 */
Vec.fromAngles = function(theta, phi, length) {
  if (typeof length === 'undefined') {
    length = 1;
  }
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);
  const cosTheta = Math.cos(theta);
  const sinTheta = Math.sin(theta);

  return new Vec(
      length * sinTheta * sinPhi,
      -length * cosTheta,
      length * sinTheta * cosPhi,
  );
};

/**
 * Create a new 2D vector with a random angle
 *
 * ### Examples:
 *     let vector = Vec.random2D;
 *
 *     vector.toObject();
 *     // => {x: 0.616, y: 0.787, z: 0}
 *
 * @return {Vec} `this` for chaining capabilities
 * @api public
 */
Vec.random2D = function random2D() {
  return Vec.fromAngle(Math.random() * twoPi);
};

/**
 * Create a new 3D vector with a random angle
 *
 * ### Examples:
 *     let vector = new Vec.random3D;
 *
 *     vec1.toObject();
 *     // => {x: 0.442, y: -0.800, z: -0.405}
 *
 * @return {Vec} New Vec instance
 * @api public
 */
Vec.random3D = function random3D() {
  const angle = Math.random() * twoPi;
  const vz = Math.random() * 2 - 1;
  const vzBase = Math.sqrt(1 - vz * vz);
  const vx = vzBase * Math.cos(angle);
  const vy = vzBase * Math.sin(angle);
  return new Vec(vx, vy, vz);
};

/**
 * Get the negative of a vector
 *
 * ### Examples:
 *     let vector = new Vec(2, -1, 5);
 *
 *     vector.negative();
 *     vector.toObject();
 *     // => {x: -2, y: 1, z: -5}
 *
 * @return {Vec} `this` for chaining capabilities
 * @api public
 */
Vec.prototype.negative = function() {
  return new Vec(-this.x, -this.y, -this.z);
};

/**
 * Get the length / magnitude of a vector
 *
 * ### Examples:
 *     let vector = new Vec(3, 4, 0);
 *
 *     vector.length();
 *     // => 5
 *
 * @return {Number} Length / Magnitude
 * @api public
 */
Vec.prototype.length = function() {
  return Math.sqrt(this.lengthSq());
};

Vec.prototype.magnitude = Vec.prototype.length;

/**
 * Get the squared lenght / magnitude of a Vector
 *
 * ### Examples:
 *     let vector = new Vec(3, 4, 0);
 *
 *     vector.lengthSq();
 *     // => 25
 *
 * @return {Number} Squared lenght / magnitude of the vector
 * @api public
 */
Vec.prototype.lengthSq = function() {
  return Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2);
};


/**
 * Normalize the vector lenght to 1
 *
 * ### Examples:
 *     let vector = new Vec(4, 6, 5);
 *
 *     vector.normalize();
 *     vector.toObject();
 *     // => {x: 0.455, y: 0.683, z: 0.569}
 *
 * @return {Vec} `this` for chaining capabilities
 * @api public
 */
Vec.prototype.normalize = function() {
  const length = this.length();

  if (length !== 0) {
    this.divide(length);
  }
  return this;
};

/**
 * Set the magnitude of the vector
 *
 * ### Examples:
 *     let vector = new Vec(4, 6, 5);
 *
 *     vector.setMag(4);
 *     vector.toObject();
 *     // => {x: 1.823, y: 2.735, z: 2.279}
 *
 * @param {n} n The length you want the vector to be
 * @return {Vec} `this` for chaining capabilities
 * @api public
 */
Vec.prototype.setMag = function(n) {
  return this.normalize().multiply(n);
};
