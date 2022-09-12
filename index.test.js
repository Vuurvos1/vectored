// import Vec from './index.js';
const Vec = require('./index');

// static
describe('static Vectored methods', () => {
	describe('new vector', () => {
		let x = 10;
		let y = 20;
		let vec1 = new Vec(x, y);
		let vec2 = Vec(x, y);

		it('should be an instance of Vectored', () => {
			expect(vec1).toBeInstanceOf(Vec);
			expect(vec2).toBeInstanceOf(Vec);
		});

		it('should have axis arguments', () => {
			expect(vec1).toHaveProperty('x', x);
			expect(vec1).toHaveProperty('y', y);
		});
	});

	describe('vector from array', () => {
		let arr = [10, 20, 5];
		let vec1 = Vec.fromArray(arr);
		let vec2 = Vec.fromArray([]);

		it('should be an instace of Vectored', () => {
			expect(vec1).toBeInstanceOf(Vec);
		});

		it('should have correct axis from array', () => {
			expect(vec1).toHaveProperty('x', arr[0]);
			expect(vec1).toHaveProperty('y', arr[1]);
			expect(vec1).toHaveProperty('z', arr[2]);
		});

		it('should default to 0s', () => {
			expect(vec2).toHaveProperty('x', 0);
			expect(vec2).toHaveProperty('y', 0);
			expect(vec2).toHaveProperty('z', 0);
		});
	});

	describe('vector from object', () => {
		let obj = { x: 10, y: 20, z: 5 };
		let vec1 = Vec.formObject(obj);
		let vec2 = Vec.formObject({});

		it('should be an instace of Vectored', () => {
			expect(vec1).toBeInstanceOf(Vec);
		});

		it('should have correct axis from object', () => {
			expect(vec1).toHaveProperty('x', obj.x);
			expect(vec1).toHaveProperty('y', obj.y);
			expect(vec1).toHaveProperty('z', obj.z);
		});

		it('should default to 0s', () => {
			expect(vec2).toHaveProperty('x', 0);
			expect(vec2).toHaveProperty('y', 0);
			expect(vec2).toHaveProperty('z', 0);
		});
	});
});

// chanable
describe('chainable methods', () => {
	// add, x y z
	// add scalar, x y z
	// subtract, x y z
	// subtract scalar, x y z
	// divide, x y z
	// divide scalar, x y z
	// multiply, x y z
	// multiply scalar, x y z
	// normalize
	// limit
	// randomize, x y z
	// unfloat
	// mix, x y z
	// zero
	// horizontal angle
	// rotate
	// rotate deg
	// rotate to
	// rotate to deg
	// rotate by
	// rotate by deg
	// project onto

	// cross product
	describe('get cross product of 2 vectors', () => {
		let vec1 = new Vec(10, 20, 5);
		let vec2 = new Vec(5, 15, 10);
		let cross = vec1.cross(vec2);

		it('should return cross product of 2 vectors', () => {
			expect(cross.x).toStrictEqual(125);
			expect(cross.y).toStrictEqual(-75);
			expect(cross.z).toStrictEqual(50);
		});
	});
});

// regular
describe('regular methods', () => {
	describe('clone a vector instance', () => {
		let vec = new Vec(10, 20);
		let clone = vec.clone();

		it('should return a clone of a vector', () => {
			expect(vec).toBeInstanceOf(Vec);
			expect(vec === clone).toStrictEqual(false);
		});

		it('should have the same values as the original', () => {
			expect(vec.x).toStrictEqual(clone.x);
			expect(vec.y).toStrictEqual(clone.y);
			expect(vec.z).toStrictEqual(clone.z);
		});
	});

	describe('get dot product of 2 vectors', () => {
		let vec1 = new Vec(10, 20, 5);
		let vec2 = new Vec(5, 15, 10);
		let dot = vec1.dot(vec2);

		it('should return the dot procut of 2 vectors', () => {
			expect(dot).toStrictEqual(400);
		});
	});

	// distance, x y z
	describe('get length between 2 vectors', () => {
		let vec1 = new Vec(0, 0, 0);
		let vec2 = new Vec(3, 4, 0);
		let dist = vec1.distance(vec2);

		it('should return euclidean distance between 2 vectors', () => {
			expect(dist).toStrictEqual(5);
		});
	});

	describe('get lenght of vector', () => {
		let vec = Vec(3, 4);
		let len = vec.length();

		it('should return lenght of the vector', () => {
			expect(len).toStrictEqual(5);
		});
	});

	describe('get squared length of vector', () => {
		let vec = Vec(3, 4);
		let len = vec.lengthSq();

		it('should return squared lenght of vector', () => {
			expect(len).toStrictEqual(25);
		});
	});

	describe('if vectors are equal', () => {
		let vec1 = new Vec(10, 20, 5);
		let vec2 = new Vec(10, 20, 5);
		let vec3 = new Vec(30, 10, 15);

		it('should be true if vectors have the same values', () => {
			expect(vec1.equals(vec2)).toStrictEqual(true);
		});

		it('should be false if vectors do not have the same values ', () => {
			expect(vec1.equals(vec3)).toStrictEqual(false);
		});
	});

	// not equals
	describe('if vectors are not equal', () => {
		let vec1 = new Vec(10, 20, 5);
		let vec2 = new Vec(10, 20, 5);
		let vec3 = new Vec(30, 10, 15);

		it('should be false if vectors have the same values', () => {
			expect(vec1.notEqual(vec2)).toStrictEqual(false);
		});

		it('should be true if vectors do not have the same values ', () => {
			expect(vec1.notEqual(vec3)).toStrictEqual(true);
		});
	});
});

// utility
describe('utiltiy methods', () => {
	describe('to string', () => {
		let x = 10;
		let y = 20;
		let z = 5;
		let vec = Vec(x, y, z);
		let str = vec.toString();

		it('should represent the vector as an string', () => {
			expect(typeof str).toBe('string');
			expect(str).toStrictEqual(`x:${x} y:${y} z:${z}`);
		});
	});

	describe('to array', () => {
		let x = 10;
		let y = 20;
		let z = 5;
		let vec = Vec(x, y, z);
		let arr = vec.toArray();

		it('should represent the vector as an array', () => {
			expect(arr).toBeInstanceOf(Array);
			expect(arr).toStrictEqual([x, y, z]);
		});
	});

	describe('to object', () => {
		let x = 10;
		let y = 20;
		let z = 5;
		let vec = Vec(x, y, z);
		let obj = vec.toObject();

		it('should represent the vector as an object', () => {
			expect(obj).toBeInstanceOf(Object);
			expect(obj).toStrictEqual({ x: x, y: y, z: z });
		});
	});
});
