import React, { useState, useEffect, useCallback, useRef } from 'react'
import { InfiniteModel } from '../model/InfinitModel';
import { InfinitView } from '../view/InfinitView'

const InfinitController = () => {

    const [query, setQuery] = useState("");
    const [showBTNtop, setShowBtnTop] = useState(false)
    const [page, setPage] = useState(1);
    const data = InfiniteModel(query, page)
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

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                setShowBtnTop(true)
            } else {
                setShowBtnTop(false)
            }
        })
    }, [])

    const _handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            <InfinitView ref={loader} data={data} showBTN={showBTNtop} />
        </>
    )
}

export { InfinitController }