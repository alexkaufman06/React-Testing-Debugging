import data from '../../data/courses.json';

const numItems = data.length;

test('Number of items = 12', () => {
	expect(numItems).toBe(12);
});

test('Number of items to be >= 12', () => {
	expect(numItems).toBeGreaterThanOrEqual(12);
});

const dataTest = data[0].title;

test('There is a JS in this title', () => {
	expect(dataTest).toMatch(/JS/);
	// JS Portion has REGEX
});

test('The title contains React', () => {
	expect(dataTest).toContain('React');
});

/* MORE MATCHERS METHODS CAN BE FOUND HERE:
   https://facebook.github.io/jest/docs/en/using-matchers.html
*/