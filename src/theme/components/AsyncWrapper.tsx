import React from 'react';

const AsyncWrapper = ({children}: any) => {
    return (
        <React.Suspense
            fallback={<h2>Loading...</h2>}
        >
            {children}
        </React.Suspense>
    )
}

export default AsyncWrapper