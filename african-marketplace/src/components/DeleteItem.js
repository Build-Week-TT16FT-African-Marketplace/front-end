import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../ReduxStore/actions/fetchItemsAction'
// import { } from '../ReduxStore/actions/fetchItemsAction'

const DeleteItem = ({cid}) => {
    const dispatch = useDispatch()
    const { push } = useHistory()
    
    const delItem = () => {
        dispatch(deleteProduct(cid))
        push('/Market')
        console.log('this is what props returns:', cid)
    }

    return (
        <div>
            <button onClick={delItem}>
                Delete
            </button>
        </div>
    )
}

export default DeleteItem;