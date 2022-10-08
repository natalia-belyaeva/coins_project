import React, { Component } from "react";
import ListOfCoinsHeader from "../components/ListOfCoinsHeader/ListOfCoinsHeader";
import SearchBox from "../components/SearchBox/SearchBox";
import AdvancedFilter from "../components/AdvancedFilter/AdvancedFilter";
import './ListOfCoins.css';
import CoinsCatalogue from "../components/CoinsCatalogue/CoinsCatalogue";
// import { connect } from "react-redux";
// import store from "../../redux/store";

class ListOfCoins extends Component{
    // componentDidMount() {
    //     console.log('Hello')
    //     this.state = store.getState();
    //     store.subscribe(() => {
    //         console.log('Hello world')
    //         const state = store.getState();
    //         this.setState(state)
    //         console.log(state)
    //     })  
    // }

    render() {
        console.log(this.props)
        return(
            <div className='list-of-coins'>
                <ListOfCoinsHeader />
                <main className='coins-page-content'>
                    <div className='coins-page-search-box'>
                        <SearchBox />
                    </div>
                    <div className='coins-page-filter'>
                        <AdvancedFilter />
                    </div>
                </main>
                <section className='main-page-catalogues'>
                    <CoinsCatalogue />
                </section> 
            </div>
        )
    }
}

export default ListOfCoins;
