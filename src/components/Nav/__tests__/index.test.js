// Import the Nav Components
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// next we'll configure the testing environment by adding the cleanup utility and the describe function

// clean up
afterEach(cleanup);

// Tests
// ==============================================

// Test for page render and snapshot
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
    });
})

// Test if the camera emoji is visible
describe('emoji is visible', () => {
    test('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

// Test that links are visible
describe('links are visible', () => {
    test('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });

})