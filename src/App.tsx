import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Lesson } from './components/Lesson'
import { Video } from './components/Video'
import { client } from './lib/apollo'
import logo from './logo.svg'
import { Event } from './pages/Event'
import './style/global.css'

interface lesson {
  id:string,
  title:string
}

function App() {
  return (
  
   <> 

    <Event/>
    
    </>
  )
}

export default App
