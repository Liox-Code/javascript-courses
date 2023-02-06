import React from 'react';
import { useLocation } from 'react-router-dom';

import '../assets/styles/components/Search.scss';

const Search = () => {
    const mainClass = (
        useLocation().pathname === '/'
    ) ? 'searchInput': '';
    return(
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input type="text" className={`search-input ${mainClass}`} placeholder="Buscar..."/>
        </section>
    )
}

export default Search;