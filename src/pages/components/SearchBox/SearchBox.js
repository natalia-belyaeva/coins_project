import React, { Component } from 'react';
import './SearchBox.css'

class SearchBox extends Component {
    render() {
        return(
            <div className='search-box'>
                <form className='search-box-form'>
                    <div>Input field</div> 
                    <div className='search-box-input'>
                        <label className='search-box-form-label'>
                            <input 
                                type='text'
                                className='search-box-form-input'
                            />
                        </label>
                        <button
                            type='submit'
                            className='search-box-form-submit' 
                        >
                            Search
                        </button>
                    </div>  
                </form>
            </div>
        )
    }
}

export default SearchBox;