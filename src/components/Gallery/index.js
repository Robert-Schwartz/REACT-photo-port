import React from 'react';
// import helper function for Capitalize First Letter
import { capitalizeFirstLetter } from '../../utils/helpers';
// import photo
import photo from "../../assets/small/commercial/0.jpg";


// Gallery Component
import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
    const { currentCategory } = props;
    return (
        <section>
            {/* we want the name and description of the selected category to show up at the top */}
            <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}
export default Gallery;
