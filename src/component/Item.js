import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import './Item.css'
import { useDispatch, useSelector } from 'react-redux'

function Item({icon, name}) {
    const navigateCurrent = useSelector(state => state.navigateCurrent)
    const [nameNavigate, setNameNavigate] = useState(navigateCurrent)
    console.log("🚀 ~ file: Item.js:8 ~ Item ~ navigateCurrent:", navigateCurrent)
    const dispatch = useDispatch();

    const subheading ={
        true:{
            opacity: 1
        },
        false:{
            opacity: 0,
            display: 'none'
        }
    }

    useEffect(() => {
        setNameNavigate(navigateCurrent)
    }, [navigateCurrent])
  return (
    <motion.div 
    onClick={() => {
        dispatch( {
            type: 'updateNavigateCurrent',
            value: name
        })
    }}
    style={{
        backgroundColor: name === nameNavigate ? "rgba(255, 255, 255, 0.3)" : null,
    }}
    className='item'
    whileHover = {{
        cursor: 'pointer'
    }}
    transition={{
        type:'none', duration: 0.1
    }}
    >
        <motion.div className='icon'>
            {icon}
        </motion.div>
        <motion.span
        variants={subheading}
        >
            {name}
        </motion.span>
    </motion.div>
  )
}

export default Item