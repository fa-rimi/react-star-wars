import React from "react";

// using destructuring to directly extract starShips from the props.
function StarShipCards({ starShips }) {
  return (
    // check if starShips contains data
    <div className="container">
      {starShips.length > 0 ? (
        // if it does, it maps over each item (starship object) in starShips and renders a div element with the class name "ship" for each starship, displaying its name
        starShips.map((item, index) => (
          <div className="ship" key={index}>
            {item.name}
          </div>
        ))
      ) : (
        // if starShips is empty or not yet fetched, it renders a single div element with the class name "ship" displaying the text "No Ships found."
        <div className="ship">No Ships found</div>
      )}
    </div>
  );
}

export default StarShipCards;
