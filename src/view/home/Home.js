import React from 'react'
import Card from '../../components/memberCard/MemberCard'
import { HomeCardWrapper } from './HomeStyles'

export default function Home() {
  return (
    <>
    <HomeCardWrapper>
    <div className='container'>

           <Card />
           </div>
        </HomeCardWrapper>
    </>
  )
}
