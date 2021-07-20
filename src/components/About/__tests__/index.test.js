import React from 'react';
import About from '..';

//Incorporate the React Testing Library
import { render, cleanup } from '@testing-library/react';
//Import the jest - dom Package
import '@testing-library/jest-dom/extend-expect';


// Configure the Testing Environment

afterEach(cleanup);
//This will ensure that after each test, we won't have any leftover memory data that could give us false results.

// declare the component we're testing
describe('About component', () => {
    // First Test
    test ('renders', () => {
        render(<About />);
    });

    // Second Test
})