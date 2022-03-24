import React, { useEffect, useState, useCallback, useRef } from 'react'
import useFetch from "./../controller/useFetch";

function InfinitScroll() {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const { loading, error, list } = useFetch(query, page);
    const loader = useRef(null);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        console.log('target.isIntersecting==>', target.isIntersecting)
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "200px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    return (
        <div className="App">
            <h1>Infinite Scroll</h1>
            <div>
                {list.map((item, i) => (
                    <div key={i} style={{ backgroundColor: i % 2 == 0 ? 'gray' : '#0e0e0e0e', padding: "0.3rem", color: i % 2 !== 0 ? 'gray' : '#fefefe' }}>{item.status + ' ' + item.id}</div>
                ))}
            </div>
            {loading && <p style={{ color: 'red', fontSize: '2rem' }}>Loading...</p>}
            {error && <p>Error!</p>}
            <div ref={loader} />
        </div>
    );
}

export { InfinitScroll };