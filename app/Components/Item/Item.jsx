import React from 'react'
import './Item.css'
import Image from 'next/image'

const Item = (props) => {
  return (
    <div className="item">
      <Image
                src={props.image}
                alt="hand"
              />
              <p>{props.name}</p>
              <div className="item-price">
                <div className="item-price-new"> {props.new_price}</div>
                <div className="item-price-old">{props.old_price}</div>

              </div>
    </div>
  )
}

export default Item
