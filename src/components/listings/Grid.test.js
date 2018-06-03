import data from '../../data/courses.json';

// INTEGER TESTS
const numItems = data.length;

describe('Integer tests', () => {
	test('Number of items = 12', () => {
		expect(numItems).toBe(12);
	});

	test('Number of items to be >= 12', () => {
		expect(numItems).toBeGreaterThanOrEqual(12);
	});
});

// STRING TESTS
const dataTest = data[0].title;

describe('String tests', () => {
	test('There is a JS in this title', () => {
		expect(dataTest).toMatch(/JS/); // JS Portion is REGEX
	});

	test('The title contains React', () => {
		expect(dataTest).toContain('React');
	});
});

// ARRAYS AND OBJECTS TESTS
const dataArray = ['React Native', 'MeteorJS'];

describe('Arrays and Objects tests', () => {
	test('The array contains React native and MeteorJS', () => {
		expect(['React Native', 'MeteorJS', 'Poop']).toEqual(expect.arrayContaining(dataArray));
	});

	test('The first course to have a property of Title', () => {
		expect(data[0]).toHaveProperty('title');
	});

	test('The first course to have a 31,266 views', () => {
		expect(data[0]).toHaveProperty('views', '31,266');
	});
});

/* MORE MATCHERS METHODS CAN BE FOUND HERE:
   https://facebook.github.io/jest/docs/en/using-matchers.html
*/