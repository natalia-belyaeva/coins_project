import React, { Component } from 'react';
import Header from '../components/Header/Header';
import SearchBox from '../components/SearchBox/SearchBox';
import Catalogues from '../components/Catalogues/Catalogues';
import AdvancedFilter from '../components/AdvancedFilter/AdvancedFilter';
import './MainPage.css' 
// import CoinsCatalogue from '../components/CoinsCatalogue/CoinsCatalogue';

class MainPage extends Component {
    render() {
        return (
            <div className='main-page'>
                <Header />
                <main className='main-page-content'>
                    <div className='main-page-search-box'>
                        <SearchBox />
                    </div>
                    <div className='main-page-filter'>
                        <AdvancedFilter />
                    </div>
                </main>
                <section className='main-page-catalogues'>
                    <Catalogues />
                </section>
                {/* <section className='catalogues'>
                    <CoinsCatalogue />
                </section> */}
            </div>  
        )
    }
}

export default MainPage;