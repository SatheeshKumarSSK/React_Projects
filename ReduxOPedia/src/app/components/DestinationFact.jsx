import React from 'react';
import { useSelector } from 'react-redux';

function DestinationFact() {
    const destination = useSelector((state) => state.destinationStore.destinationSelected);

    if (Object.keys(destination).length === 0) {
        return (
            <div className="text-center pt-4 text-warning">Select a Destination</div>
        );
    }
    else {
        return (
            <div className="text-center border p-3 m-2">
                <h4 className="text-success">{destination.name}</h4>
                Days Recommened : {destination.days} <br />
                Fun Fact : {destination.fact}
            </div>
        );
    }
}

export default DestinationFact