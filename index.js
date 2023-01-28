/**
 * # Vectored
 * a 2 and 3d vector math library
 *
 * @example
 * 	let vector = new Vector(10, 20, 5);
 *
 * @param {number} x - x component of the vector
 * @param {number} y - y component of the vector
 * @param {number} z - z component of the vector
 */

class Vector {
	constructor(x = 0, y = 0, z = 0) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	// ## creating a vector

	/**
	 * Returns a vector that faces up
	 */
	up() {
		return new Vector(0, 1, 0);
	}

	/**
	 * Returns a vector that faces left
	 */
	left() {
		return new Vector(-1, 0, 0);
	}

	/**
	 * Returns a vector that faces down
	 */
	down() {
		return new Vector(0, -1, 0);
	}

	/**
	 * Returns a vector that faces right
	 */
	right() {
		return new Vector(1, 0, 0);
	}

	/**
	 * Returns a vector that faces forward
	 */
	forward() {
		return new Vector(0, 0, 1);
	}

	/**
	 * Returns a vector that faces backwards
	 */
	back() {
		return new Vector(0, 0, -1);
	}

	/**
	 * Returns a vector containing all zeros
	 */
	zero() {
		return new Vector(0, 0, 0);
	}

	/**
	 * Returns a vector containing all ones
	 */
	one() {
		return new Vector(1, 1, 1);
	}

	/**
	 * Create a new vector from an array
	 * @param {number[]} array - Array of numbers
	 * @param {number} [offset=0] - Offset inot the array
	 */
	fromArray(array, offset = 0) {
		this.x = array[offset] || 0;
		this.y = array[offset + 1] || 0;
		this.z = array[offset + 2] || 0;
		return this;
	}

	/**
	 * Create a new vector from an object
	 * @param {object} object - Object containing vector components
	 * @param {number} [object.x=0] - x component of the vector
	 * @param {number} [object.y=0] - y component of the vector
	 * @param {number} [object.z=0] - z component of the vector
	 */
	fromObject(object) {
		this.x = object.x || 0;
		this.y = object.y || 0;
		this.z = object.z || 0;
		return this;
	}

	/**
	 * Create a 2d vector from a radian angle
	 *
	 * @example
	 * 	let vector = new Vec().fromAngle(Math.PI / 2, 1);
	 * 	// => {x: 0, y: 1, z: 0}
	 *
	 * @param {number} angle - desired angle in radians
	 * @param {number} length - length of the new vector (defaults to 1)
	 * @return {Vector}
	 */
	fromAngle(angle, length = 1) {
		this.x = Math.cos(angle) * length;
		this.y = Math.sin(angle) * length;
		this.z = 0;
		return this;
	}

	/**
	 * Create a new 2d unit vector with a random angle
	 *
	 * @example
	 * let vector = Vec.random2D;
	 *  // => {x: 0.616, y: 0.787, z: 0}
	 *
	 * @return {Vector}
	 */
	random2D() {
		return this.fromAngle(Math.random() * Math.PI * 2);
	}

	/**
	 * Create a new 3d unit vector with a random angle
	 *
	 * @example
	 *     let vector = new Vec.random3D;
	 *     // => {x: 0.442, y: -0.800, z: -0.405}
	 *
	 * @return {Vector} New vector instance
	 */
	random3D() {
		const angle = Math.random() * Math.PI * 2;
		const vz = Math.random() * 2 - 1;
		const vzBase = Math.sqrt(1 - vz * vz);
		const vx = vzBase * Math.cos(angle);
		const vy = vzBase * Math.sin(angle);
		this.x = vx;
		this.y = vy;
		this.z = vz;
		return this;
	}

	// ### vector presets
	// up, down, left, right, one, zero...

	// vector something (like utils but different)
	/**
	 * Set vector components
	 * @param {number} x - new x component
	 * @param {number} y - new y component
	 * @param {number} z - new z component
	 */
	set(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}

	/**
	 * Set x component of vector
	 */
	setX(x) {
		this.x = x;
		return this;
	}

	/**
	 * Set y component of vector
	 */
	setY(y) {
		this.y = y;
		return this;
	}

	/**
	 * Set z component of vector
	 */
	setZ(z) {
		this.z = z;
		return this;
	}

	// ## basic vector math

	/**
	 * Add vectors together
	 */
	add(x, y, z) {
		if (x instanceof Vector) {
			this.x += x.x;
			this.y += x.y;
			this.z += x.z;
			return this;
		}

		this.x += x || 0;
		this.y += y || 0;
		this.z += z || 0;
		return this;
	}

	/**
	 * Add scalar to vector components
	 */
	addScalar(s) {
		this.x += s;
		this.y += s;
		this.z += s;
		return this;
	}
	// addVector = add // doesn't work addVector(v) {return this.add(v)}
	// addScaledVector(v, s) // add vector and scale this.x += v.x * s

	/**
	 * Subtract vectors
	 */
	sub(x, y, z) {
		if (x instanceof Vector) {
			this.x -= x.x;
			this.y -= x.y;
			this.z -= x.z;
			return this;
		}

		this.x -= x || 0;
		this.y -= y || 0;
		this.z -= z || 0;
		return this;
	}

	/**
	 * Subtract vector from vector (alias)
	 */
	subtract(x, y, z) {
		return this.sub(x, y, z);
	}

	/**
	 * Subtract scalar from vector components
	 */
	subScalar(s) {
		this.x -= s;
		this.y -= s;
		this.z -= s;
		return this;
	}
	// subtractScalar

	/**
	 * Multiply vector by another vector
	 */
	multiply(x, y, z) {
		if (x instanceof Vector) {
			this.x *= x.x;
			this.y *= x.y;
			this.z *= x.z;
			return this;
		}

		this.x *= x || 1;
		this.y *= y || 1;
		this.z *= z || 1;
		return this;
	}

	/**
	 * Multiply vector by scalar
	 */
	multiplyScalar(s) {
		this.x *= s;
		this.y *= s;
		this.z *= s;
		return this;
	}
	// mult, multScalar

	/**
	 * Divide vector by another vector
	 */
	divide(x, y, z) {
		if (x instanceof Vector) {
			this.x /= x.x;
			this.y /= x.y;
			this.z /= x.z;
			return this;
		}

		this.x /= x || 1;
		this.y /= y || 1;
		this.z /= z || 1;
		return this;
	}

	/**
	 * Divide vector by scalar
	 */
	divideScalar(s) {
		this.x /= s;
		this.y /= s;
		this.z /= s;
		return this;
	}
	// div, divScalar

	/**
	 * Calculate the remainder of a vector divided by another vector
	 * @param {Vector} v
	 * @returns {Vector} this
	 * @example
	 */
	remainder(x, y, z) {
		if (x instanceof Vector) {
			this.x %= x.x;
			this.y %= x.y;
			this.z %= x.z;
			return this;
		}

		this.x %= x || 1;
		this.y %= y || 1;
		this.z %= z || 1;
		return this;
	}
	// rem

	/**
	 * Calculate the remainder of a vector divided by a scalar
	 * @param {number} s
	 * @returns {Vector} this
	 */
	remainderScalar(s) {
		this.x %= s;
		this.y %= s;
		this.z %= s;
		return this;
	}

	// vector math
	/**
	 * Calculate the cross product of two vectors
	 * @param {Vector} v
	 * @returns {Vector} this
	 */
	cross(v) {
		this.x = this.y * v.z - this.z * v.y;
		this.y = this.z * v.x - this.x * v.z;
		this.z = this.x * v.y - this.y * v.x;
		return this;
	}

	/**
	 * Calculates the dot product of two vectors
	 * @example
	 * let vec1 = new Vec(100, 50);
	 * let vec2 = new Vec(200, 60);
	 * vec1.dot(vec2);
	 * // => 23000
	 *
	 * @param {Vector} v - second vector
	 * @return {number} dot product
	 */
	dot(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	}
	// TODO: seperate x, y and z?

	/**
	 * Linearly interpolate between two vectors
	 * @param {Vector} v - second vector
	 * @param {number} t - interpolation amount
	 * @returns {Vector} this
	 */
	lerp(v, t) {
		this.x += (v.x - this.x) * t;
		this.y += (v.y - this.y) * t;
		this.z += (v.z - this.z) * t;
		return this;
	}

	// ## vector utils

	/**
	 * Get the squared length of the vector
	 * @returns {number} - squared vector lenght
	 */

	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	// lengthSquared, magnitudeSquard, magSq, magnitudeSq

	/**
	 * Get the lenght of the vector
	 * @returns {number} - vector lenght
	 */
	length() {
		return Math.sqrt(this.lengthSq());
	}
	// magnitude

	distanceSq(v) {
		return this.subtract(v).lengthSqx();
	}

	/**
	 * Get the distance between 2 vectors if they where points
	 *
	 * @example
	 * let vec1 = new Vec(3, 5, 0);
	 * let vec2 = new Vec(2, 1, 0);
	 * let dist = vec1.distance(vec2);
	 * // => 4.1231056
	 *
	 * @param {Vector} v other vector point
	 * @return {number} length between two points
	 */
	distance(v) {
		return this.subtract(v).length();
	}

	/**
	 * Round components of vector
	 */
	round() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		this.z = Math.round(this.z);
		return this;
	}

	/**
	 * Floor components of vector
	 */
	floor() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		this.z = Math.floor(this.z);
		return this;
	}

	/**
	 * Ceil components of vector
	 */
	ceil() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		this.z = Math.ceil(this.z);
		return this;
	}

	/**
	 * Normalize the vector lenght to 1
	 *
	 * @example
	 * let vector = new Vec(4, 6, 5);
	 * vector.normalize();
	 * // => {x: 0.455, y: 0.683, z: 0.569}
	 *
	 * @return {Vector} normalized vector
	 */
	normalize() {
		return this.divideScalar(this.length() || 1);
	}

	/**
	 * Set the length of the vector
	 *
	 * @example
	 * let vector = new Vec(4, 6, 5);
	 * vector.setMag(4);
	 * // => {x: 1.823, y: 2.735, z: 2.279}
	 *
	 * @param {number} length - The length you want the vector to be
	 * @return {Vector} normalized vector
	 */
	setLength(lenght) {
		return this.normalize().multiplyScalar(lenght);
	}

	/**
	 * Returns a vector that is made from the smallest components of two vectors
	 */
	min(v) {
		this.x = Math.min(this.x, v.x);
		this.y = Math.min(this.y, v.y);
		this.z = Math.min(this.z, v.z);
		return this;
	}
	// expand to take n input vectors?

	/**
	 * Return a vector that is made from the largest components of two vectors
	 */
	max(v) {
		this.x = Math.max(this.x, v.x);
		this.y = Math.max(this.y, v.y);
		this.z = Math.max(this.z, v.z);
		return this;
	}

	/**
	 * Clamp vector between a min and max vector
	 * @param {Vector} min - minimum vector
	 * @param {Vector} max - maximum vector
	 * @return {Vector} clamped vector
	 */
	clamp(min, max) {
		// assume min < max
		this.x = Math.max(min.x, Math.min(max.x, this.x));
		this.y = Math.max(min.y, Math.min(max.y, this.y));
		this.z = Math.max(min.z, Math.min(max.z, this.z));
		return this;
	}

	// clampScalar

	/**
	 * Clamp vector length between a min and max value
	 * @param {number} min - minimum length
	 * @param {number} max - maximum length
	 * @return {Vector} clamped vector
	 */
	clampLength(min, max) {
		const length = this.length();
		return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
	}
	// clampLength(min, max) (scalars)
	// limit

	// negate
	negate() {
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
		return this;
	}

	/**
	 * Returns true if the components of the vectors strictly equal
	 * @param {Vector} v - other vector you want to compare to
	 * @return {boolean} if components strictly match
	 */
	equals(v) {
		return v.x === this.x && v.y === this.y && v.z === this.z;
	}

	/**
	 * Create a copy of the current vector
	 */
	copy() {
		return new Vector(this.x, this.y, this.z);
	}
	// TODO: maybe rename to clone

	/**
	 * Returns an array that represents the vector
	 */
	toArray() {
		return [this.x, this.y, this.z];
	}

	/**
	 * Returns an object that represents the vector
	 */
	toObject() {
		return { x: this.x, y: this.y, z: this.z };
	}
}

export default Vector;
export { Vector };

/*
Basic Math
*/

// /**
//  * Create a vector from a pair of ISO spherical angles
//  *
//  * @example
//  *     let vector = new Vec().fromAngles(1.5, 2, 5);
//  *     // => {x: 4.535, y: -0.353, z: -2.075}
//  *
//  * @param {Number} theta polar angle, in radians (zero is up)
//  * @param {Number} phi azimuthal angle, in radians
//  * @param {Number} length length of the new vector (defaults to 1)
//  * @return {Vec} `this` for chaining capabilities
//  * @api public
//  */
// Vec.fromAngles = function (theta, phi, length) {
// 	if (typeof length === 'undefined') {
// 		length = 1;
// 	}
// 	const cosPhi = Math.cos(phi);
// 	const sinPhi = Math.sin(phi);
// 	const cosTheta = Math.cos(theta);
// 	const sinTheta = Math.sin(theta);

// 	return new Vec(length * sinTheta * sinPhi, -length * cosTheta, length * sinTheta * cosPhi);
// };

// /*
// transform vector
// */

// /**
//  * Set the angle of a 2D vector
//  *
//  * @example
//  *     let vec = new Vec(100, 0);
//  *
//  *     vec.rotateTo2D(-Math.PI);
//  *     // => {x: -100, y: 0, z: 0}
//  *
//  * @param {Number} rad Radians to set vector to
//  * @return {Vector} Rotated vector
//  * @api public
//  */
// Vec.prototype.rotateTo2D = function (rad) {
// 	this.x = this.x * Math.cos(rad) - this.y * Math.sin(rad);
// 	this.y = this.x * Math.sin(rad) + this.y * Math.cos(rad);
// 	return this;
// };

// /**
//  * Rotate 2D vector by certain angle
//  *
//  * @example
//  *     let vec = new Vec(100, 0);
//  *
//  *     vec.rotate(Math.PI / 2);
//  *     // => {x: 0, y: 100, z: 0}
//  *
//  * @param {Number} rad Radians to ratate vector by
//  * @return {Vector} Rotated vector
//  * @api public
//  */
// Vec.prototype.rotate2D = function (rad) {
// 	const a = Math.atan2(this.x, this.y);
// 	return this.rotateTo2D(rad + a);
// };
