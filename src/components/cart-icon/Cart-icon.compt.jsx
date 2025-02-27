import './cart-icon.styles.scss'
import Bag from '../../assets/bag.svg?react'

const CartIcon=()=>{
    return(
        <div className='cart-icon-container'>
            <Bag className='shopping-icon' />
            <span className='item-count'>10</span>
        </div>
    )
}

export default CartIcon