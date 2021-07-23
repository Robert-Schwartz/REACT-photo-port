import React from 'react';
// import helper function for Capitalize First Letter
import { capitalizeFirstLetter } from '../../utils/helpers';
// import photo
import photo from "../../assets/small/commercial/0.jpg";


// Gallery Component
function Gallery(props) {
    const currentCategory = {
        name: "commercial",
        description:
            "Photos of grocery stores, food trucks, and other commercial projects",
    };
    return (
        <section>
            {/* we want the name and description of the selected category to show up at the top */}
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div className="flex-row">
                <img
                    src={photo}
                    alt="Commercial Example"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

// export Gallery
export default Gallery;