import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
import img7 from '../img/7.jpg'
import img8 from '../img/8.jpg'
import img9 from '../img/9.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>EXPLORE MY BUSINESS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'></ul>
          <CardItem
            src={img4}
            text='Explore business synergy'
            label='Airlines'
            path='services'
          />
          <CardItem
            src={img5}
            text='Only this makes you better'
            label='Smiles'
            path='products'
          />
          <CardItem
            src={img6}
            text='Keep always Calm'
            label='Office'
            path='services'
          />
          <CardItem
            src={img7}
            text='No time to wait'
            label='Jobs Carriers'
            path='products'
          />
          <CardItem
            src={img8}
            text='Just look forward'
            label='Airlines'
            path='services'
          />
          <CardItem
            src={img9}
            text='Team are key of success'
            label='Office'
            path='products'
          />
        </div>
      </div>
    </div>
  )
}

export default Cards
