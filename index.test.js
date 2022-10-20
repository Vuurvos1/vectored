import Vec from './index.js';

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

	describe('vector from 2D angle', () => {
		let vec = new Vec.fromAngle(Math.PI / 2, 1);

		it('should have a length of 1', () => {
			expect(vec.length()).toStrictEqual(1);
		});

		it('should point right', () => {
			expect(vec.x >= 0 && vec.x < 1e-10).toStrictEqual(true); // float presission
			expect(vec.y).toStrictEqual(1);
			expect(vec.z).toStrictEqual(0);
		});
	});

	describe('create vector from iso coordinates', () => {
		it('should point up', () => {
			let vec = new Vec.fromAngles(Math.PI, 0, 5);

			expect(vec.length()).toStrictEqual(5);
			expect(vec.x).toStrictEqual(0);
			expect(vec.y).toStrictEqual(5);
			expect(vec.z >= 0 && vec.z < 1e-10).toStrictEqual(true);
		});

		it('should point down', () => {
			let vec = new Vec.fromAngles(0, Math.PI, 5);

			expect(vec.length()).toStrictEqual(5);
			expect(vec.x).toStrictEqual(0);
			expect(vec.y).toStrictEqual(-5);
			expect(vec.z).toStrictEqual(0);
		});

		it('should have a length of 5', () => {
			let vec = new Vec.fromAngles(Math.PI / 2, Math.PI / 4, 5);

			expect(vec.length()).toStrictEqual(5);
		});

		it('should have a length of 1', () => {
			let vec = new Vec.fromAngles(0, 0);

			expect(vec.length()).toStrictEqual(1);
			expect(vec.x).toStrictEqual(0);
			expect(vec.y).toStrictEqual(-1);
			expect(vec.z).toStrictEqual(0);
		});
	});
});

// chanable
describe('chainable methods', () => {
	// add
	describe('add 2 vectors to eachother', () => {
		let vec1 = new Vec(2, 5, 2);
		let vec2 = new Vec(1, 3, 3);
		let res = vec1.add(vec2);

		it('should subract 2 vectors', () => {
			expect(res.x).toStrictEqual(3);
			expect(res.y).toStrictEqual(8);
			expect(res.z).toStrictEqual(5);
		});
	});

	// subtract
	describe('subtract 2 vectors from eachother', () => {
		let vec1 = new Vec(2, 5, 2);
		let vec2 = new Vec(1, 3, 3);
		let res = vec1.subtract(vec2);

		it('should subract 2 vectors', () => {
			expect(res.x).toStrictEqual(1);
			expect(res.y).toStrictEqual(2);
			expect(res.z).toStrictEqual(-1);
		});
	});

	// divide
	describe('divide 2 vectors by eachother', () => {
		let vec1 = new Vec(2, 15, 6);
		let vec2 = new Vec(1, 3, 2);
		let res = vec1.divide(vec2);

		it('should subract 2 vectors', () => {
			expect(res.x).toStrictEqual(2);
			expect(res.y).toStrictEqual(5);
			expect(res.z).toStrictEqual(3);
		});
	});

	// multiply
	describe('multiply 2 vectors with eachother', () => {
		let vec1 = new Vec(2, 5, 2);
		let vec2 = new Vec(1, 3, 3);
		let res = vec1.multiply(vec2);

		it('should subract 2 vectors', () => {
			expect(res.x).toStrictEqual(2);
			expect(res.y).toStrictEqual(15);
			expect(res.z).toStrictEqual(6);
		});
	});

	// normalize
	describe('normalize a vectors length', () => {
		let vec = new Vec(10, 20, 5);
		let norm = vec.normalize();

		it('should return a length of 1', () => {
			expect(norm.length()).toStrictEqual(1);
		});
	});

	// limit
	describe('limit the length of a vector', () => {
		let vec1 = new Vec(10, 20, 5);
		let vec2 = new Vec(4, 0, 3);

		it('should limit the lenght of the vector', () => {
			expect(vec1.limit(5).length()).toStrictEqual(5);
		});

		it('should keep the lenght of the vector', () => {
			expect(vec2.limit(10).length()).toStrictEqual(5);
		});
	});

	// clamp
	describe('clamp the lenght of a vector', () => {
		const vec1 = new Vec(10, 0, 0);
		const vec2 = new Vec(10, 0, 0);
		const vec3 = new Vec(10, 0, 0);

		it('should limit the lenght of the vector', () => {
			expect(vec1.clamp(1, 5).length()).toStrictEqual(5);
		});

		it('should lengthen the lenght of the vector', () => {
			expect(vec2.clamp(15, 20).length()).toStrictEqual(15);
		});

		it('should keep the lenght of the vector', () => {
			expect(vec3.clamp(1, 20).length()).toStrictEqual(vec3.length());
		});
	});

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

	// lerp
	describe('lerp between 2 vectors', () => {
		let vec1 = new Vec(1, 3);
		let vec2 = new Vec(4, 2);
		let vec3 = new Vec(1, 3);
		let lerped1 = vec1.lerp(vec2, 0.5);
		let lerped2 = vec3.lerp(4, 2, 0, 0.5);

		it('should have lerped between 2 vectors', () => {
			expect(lerped1.x).toStrictEqual(2.5);
			expect(lerped1.y).toStrictEqual(2.5);
			expect(lerped1.z).toStrictEqual(0);
		});

		it('should have lerped between 2 vectors', () => {
			expect(lerped2.x).toStrictEqual(2.5);
			expect(lerped2.y).toStrictEqual(2.5);
			expect(lerped2.z).toStrictEqual(0);
		});
	});

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

	describe('set values of a vector', () => {
		let vec = new Vec(1, 3, 2);
		let vecSet = vec.set(4, 5, 0);

		it('should have set values', () => {
			expect(vecSet.x).toStrictEqual(4);
			expect(vecSet.y).toStrictEqual(5);
			expect(vecSet.z).toStrictEqual(0);
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

	// min
	describe('get smallest components of 2 vectors', () => {
		let vec1 = new Vec(10, 20, 5);
		let vec2 = new Vec(5, 15, 10);
		let min = vec1.min(vec2);

		it('should return the smallest components', () => {
			expect(min.x).toStrictEqual(5);
			expect(min.y).toStrictEqual(15);
			expect(min.z).toStrictEqual(5);
		});
	});

	// max
	describe('get largest components of 2 vectors', () => {
		let vec1 = new Vec(10, 20, 5);
		let vec2 = new Vec(5, 15, 10);
		let max = vec1.max(vec2);

		it('should return the largest components', () => {
			expect(max.x).toStrictEqual(10);
			expect(max.y).toStrictEqual(20);
			expect(max.z).toStrictEqual(10);
		});
	});

	// distance, TODO x y z
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
