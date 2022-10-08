import React, { Component } from 'react';
import './AdvancedFilter.css'
import config from '../../../config/config';

class AdvancedFilter extends Component {
    state = {
        opened: false,
        composition: [],
        countries: [],
        qualities: []
    }

    openFilter = () => {
        this.setState({ 
            opened: !this.state.opened
        })
    }

    componentDidMount() {

        // console.log(`${config.apiHostURL}/filters`)
        fetch(`${config.apiHostURL}/filters?filters=compositions,countries,qualities`)
        .then(response => response.json())
        .then(data=>{
            this.setState({composition: data.compositions, countries: data.countries, qualities: data.qualities})
        })
    }
    

    render() {
        // console.log(this.state.composition)
        return(
            <div className='advenced-filter'>
                <div className='advanced-filter-visible'>
                    <div className='advanced-filter-header' onClick={this.openFilter}>
                        <div> Advanced filter </div>
                        <img 
                            className='advanced-filter-header-arrow' 
                            src={this.state.opened ? 'img/icons/arrow-top.svg' : 'img/icons/arrow-down.svg'} 
                            alt='#'
                        />
                    </div>
                </div>
                
                { !this.state.opened 
                    ? '' 
                    : <div className='advanced-filter-drop-down-list'>
                        <div className='left-colomn'>
                            <div className='filter-item'>
                                <div className='filter-item-name'>Issuing country</div>
                                <select className='drop-down-list'>
                                    {this.state.countries.map((country) => (
                                        <option value={country.id} classList='drop-down-list-item'>{country.country_name}</option>
                                    ))} 
                                </select>
                            </div>
                            <div className='filter-item'>
                                <div className='filter-item-name'>Metal</div>
                                <select className='drop-down-list'>
                                    {this.state.composition.map((comp) => (
                                        <option value={comp.id} classList='drop-down-list-item'>{comp.composition_name}</option>
                                    ))} 
                                </select>
                            </div>
                            <div className='filter-item'>
                                <div className='filter-item-name'>Quality of coins</div>
                                <select className='drop-down-list'>
                                    {this.state.qualities.map((qual) => (
                                        <option value={qual.id} classList='drop-down-list-item'>{qual.quality_name}</option>
                                    ))} 
                                </select>
                            </div>
                        </div>
                        <div className='right-colomn'>
                            <div className='filter-item-name'>Price</div>
                            <div className='from-to-filter'>
                                <p>from</p>
                                <input type='number' className='filter-from'></input>
                                <p>to</p>
                                <input type='number' className='filter-to'></input>
                            </div>
                            <div className='filter-item-name'>Year of issue</div>
                            <div className='from-to-filter'>
                                <p>from</p>
                                <input type='number' className='filter-from'></input>
                                <p>to</p>
                                <input type='number' className='filter-to'></input>
                            </div>
                        </div>
                        
                </div>}
            </div>
        )
    }
}

export default AdvancedFilter;