// import dependencies
import React from 'react'


// import files
import Card from './Card';
import Data from './Data';

// functional component
function Service() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Service</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {/* mapping through the array of objects in the data component */}
                            {
                                Data.map((val, ind) => {
                                    return <Card key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    description={val.description}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
