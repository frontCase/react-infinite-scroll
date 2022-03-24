import React, { forwardRef } from 'react'

const InfinitView = forwardRef(({ data: { loading, error, list }, showBTN }, ref) => {

    return (
        <div >
            <div>
                <h1>Infinite Scroll</h1>
                <div>
                    {list.map((item, i) => (
                        <div key={i} style={{ backgroundColor: i % 2 == 0 ? 'gray' : '#0e0e0e0e', padding: "0.3rem", color: i % 2 !== 0 ? 'gray' : '#fefefe' }}>{item.status + ' ' + item.id}</div>
                    ))}
                </div>
                {loading && <p style={{ color: 'red', fontSize: '2rem' }}>Loading...</p>}
                {error && <p>Error!</p>}
                <div ref={ref} className="loader" />
            </div>
        </div>
    );
})

export { InfinitView };