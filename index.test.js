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
});

// regular
describe('regular methods', () => {
	// clone
	// dot
	// distance, x y z
	// length
	// iszero
	// is equal to
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
