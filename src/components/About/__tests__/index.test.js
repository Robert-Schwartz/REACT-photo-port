import React from 'react';
import About from '..';

//Incorporate the React Testing Library
import { render, cleanup } from '@testing-library/react';
//Import the jest - dom Package
import '@testing-library/jest-dom/extend-expect';


afterEach(cleanup);
//This will ensure that after each test, we won't have any leftover memory data that could give us false results.

// declare the component we're testing ('About component')
describe('About component', () => {
    //first test, does it render?
    test('renders', () => {
        render(<About />);
    });
    // second test, create a matching snapshot file 
    test('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    });
})