import { Component } from "react";
import CoinItem from "../CoinItem/CoinItem";
import { connect } from "react-redux";
import { addIdToState } from "../../../redux/actions";
// import './CoinsCatalogue'

class CoinsCatalogue extends Component {
    state = {
        coins: [
            {id: 1, name: 'Canadian Beaver', img: 'img/images/Canadian_Beaver_1.png', description: '"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.'},
            {id: 2, name: 'Looney', img: 'img/images/Looney_1.png', description:'"Looney". Unique coin with the image of a goat. Canadian dollar symbol.'},
            {id: 3, name: 'Jefferson', img: 'img/images/Jefferson_1.png', description:'Unique coin featuring Thomas Jefferson, the 3rd American president. Face value - 5 cents.'}
        ]
    } 

    render() {
        console.log(this.props)
        return(
            <div className='coins-catalogues' onClick={() => this.addIdToStateHandler(1)}>
                Hello world
                {this.state.coins.map((coin) => (
                    <CoinItem {...coin} key={coin.id}/>
                ))}                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state
    }
};

const mapDispatchToProps = dispatch => ({
    addIdToStateHandler: (id) => dispatch(addIdToState (id))
});

export default connect(mapStateToProps,mapDispatchToProps)(CoinsCatalogue);