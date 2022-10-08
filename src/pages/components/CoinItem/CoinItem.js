import { Component } from "react";
import { Link } from "react-router-dom";
import './CoinItem.css'

class CoinItem extends Component {
    render() {
        const {name, img, description} = this.props;
        return(
            <div className='coin-item'>
                <img className='coin-item-img' src={img} alt='coin'/>
                <div className='coin-item-text'>
                    <Link to ='/listofcoins/:name' className='coin-item-name'> {name} </Link>
                    <div className='coin-item-description'>{description}</div>
                </div>
            </div>
        )
    }
}

export default CoinItem;