import { Component } from "react";
import './CatalogueItem.css'
import { addIdToState } from "../../../redux/actions";
// import store from "../../../redux/store";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class CatalogueItem extends Component {
    // state = store.getState();
    
    // addIdToStateHandler = (id) => {
    //     store.dispatch(addIdToState(id))
    // }

    // componentDidMount() {
    //     console.log('Hello')

    //     store.subscribe(() => {
    //         console.log('Hello world')
    //         const state = store.getState();
    //         this.setState(state)
    //         console.log(state)
    //     })  
    // }

    render() {
        // console.log(this.props);
        const {id, catalog_name, catalog_img} = this.props;
        let img = `/img/images/${catalog_img}`
        // let linkTo = `/ListOfCoins/:${this.state.id}`
        return(
            <article className='catalogue-item'>
                <div className='catalogue-item-name'>{catalog_name}</div>
                <div className='show-all'>
                    <Link to ='/ListOfCoins' className='show-all-name' onClick={() => this.addIdToStateHandler(id)}> Show all </Link>
                    <img className='arrow-right' src='/img/icons/arrow-right.svg' alt='#' />
                </div>
                <img className='catalogue-item-img' src={img} alt='coin' onClick={() => this.addIdToStateHandler(id)}/>
            </article>
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

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueItem);