// __tests__/PhotoList.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '../'

//ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup)

// Tests
// ==============================================

describe('PhotoList is rendering', () => {
    // baseline test
    it('renders', () => {
        render(<PhotoList />);
    });

    it('renders', () => {
        const { asFragment } = render(<PhotoList />)
        expect(asFragment()).toMatchSnapshot()
    });
});