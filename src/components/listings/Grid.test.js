import data from '../../data/courses.json';

// Integers
const numItems = data.length;

test('Number of items = 12', () => {
	expect(numItems).toBe(12);
});

test('Number of items to be >= 12', () => {
	expect(numItems).toBeGreaterThanOrEqual(12);
});

// Strings
const dataTest = data[0].title;

test('There is a JS in this title', () => {
	expect(dataTest).toMatch(/JS/);
	// JS Portion has REGEX
});

test('The title contains React', () => {
	expect(dataTest).toContain('React');
});

// Arrays
const dataArray = ['React Native', 'MeteorJS'];

test('The array contains React native and MeteorJS', () => {
	expect(['React Native', 'MeteorJS', 'Poop']).toEqual(expect.arrayContaining(dataArray));
});

// Objects
test('The first course to have a property of Title', () => {
	expect(data[0]).toHaveProperty('title');
});

test('The first course to have a 31,266 views', () => {
	expect(data[0]).toHaveProperty('views', '31,266');
});

/* MORE MATCHERS METHODS CAN BE FOUND HERE:
   https://facebook.github.io/jest/docs/en/using-matchers.html
*/