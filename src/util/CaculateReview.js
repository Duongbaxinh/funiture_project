import React from 'react';
export const rate = (reviews) => {
    const sum = reviews.reduce((result, review) => result += review.review_evaluate, 0)
    for (var i = 0; i < rate; i++) {
        
    }
}


function CaculateReview(props) {
    return (
        <>
            {rate === 5 &&
                <div>

                </div>
            }</>



    );
}

export default CaculateReview;