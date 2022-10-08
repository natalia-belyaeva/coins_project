import React, { Component } from "react";
import './CoinDescription.css';

class CoinDescription extends Component {
    render() {
        return(
            <div className='coin-description'>
                <div className='coin-img'>
                    <img className='front-img' src='img/images/Canadian_Beaver_1.png' alt='#' /> <br/>
                    <img className='revers-img' src='img/images/Canadian_Beaver_2.png' alt='#' />
                </div>
                <div className='coin-desc'>
                    <div className='coin-desc-name'>Canadian Beaver</div>
                    <div className='coin-full-desc'>
                        "Canadian beaver". Unique coin with the image of a beaver. 
                        Face value - 5 cents. Created under Elizabeth II. <br /><br />
                        In the center of the obverse is a portrait of Queen Elizabeth II, 
                        the profile is directed to the right. The inscription on the left 
                        semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA 
                        (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark. <br /><br />
                        In the center of the coin reverse is a Canadian beaver on a rock sticking 
                        out of the water. At the top is a semicircle with the inscription "5 cents"
                        between two maple leaves. At the bottom in two lines is the inscription 
                        CANADA (CANADA) and the year of minting.
                    </div>
                    <div className='info-table'>
                        <tr>
                            <td>Issuing Country</td>
                            <td>CANADA</td>
                        </tr>
                        <tr>
                            <td>Composition</td>
                            <td>nickel</td>
                        </tr>
                        <tr>
                            <td>Quality</td>
                            <td>BU</td>
                        </tr>
                        <tr>
                            <td>Denomination</td>
                            <td>5 cents</td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>1965</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>4,54 g</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>40$</td>
                        </tr>
                    </div>
                </div>  
            </div>
        )
    }
}

export default CoinDescription;