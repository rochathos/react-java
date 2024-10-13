import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FoodData } from './interface/FoodData'
import { useFoodData } from './hooks/useFoodData'
import { Card } from './card/card'
import { CreateModal } from './create-modal/create-modal'



function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal =() =>{
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardapio</h1>
      <div className='card-grid'>
        {data?.map(foodData => 
            <Card 
              price = {foodData.price} 
              image = {foodData.image}  
              title = {foodData.title}
            /> 
          )
        }
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
