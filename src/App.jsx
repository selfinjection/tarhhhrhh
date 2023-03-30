import { useState } from 'react'
import CustomersReview from './components/CustomersReview'
import Healthcare from './components/Healthcare'
import HealthcareApp from './components/HealthcareApp'
import HealthcareLeading from './components/HealthcareLeading'
import Navbar from './components/navbar'
import Services from './components/Services'
import './styles/main.scss'

function App() {
  const services = {
    1: {'img_link': 'assets/icons/lupa.png', 'service_name': 'Search doctor', 'description': 'Choose your doctor from thousands of specialist, general, and trusted hospitals'},
    2: {'img_link': 'assets/icons/banka.png', 'service_name': 'Online pharmacy', 'description': 'Buy  your medicines with our mobile application with a simple delivery system'},
    3: {'img_link': 'assets/icons/telefon.png', 'service_name': 'Consultation', 'description': 'Free consultation with our trusted doctors and get the best recomendations'},
    4: {'img_link': 'assets/icons/anketa.png', 'service_name': 'Details info', 'description': 'Free consultation with our trusted doctors and get the best recomendations'},
    5: {'img_link': 'assets/icons/chemodan.png', 'service_name': 'Emergency care', 'description': 'You can get 24/7 urgent care for yourself or your children and your lovely family'},
    6: {'img_link': 'assets/icons/tracking.png', 'service_name': 'Tracking', 'description': 'Track and save your medical history and health data '},
}
  const reviews = {
    1: {'img_link': 'assets/author_img.png', 'author_name': 'Kristina Gay', 'author_role': 'front', 'description': 'Free consultation with our trusted doctors and get the best recomendations'},
    2: {'img_link': 'assets/author_img.png', 'author_name': 'Lesha Gay', 'author_role': 'stonks', 'description': 'bla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla bla'},
    3: {'img_link': 'assets/author_img.png', 'author_name': 'Illia Gy', 'author_role': 'monkey job', 'description': 'bla bla bla blabla bla bla blabla bla bla blabla bla bla bla'},
    4: {'img_link': 'assets/author_img.png', 'author_name': 'Search doctor', 'author_role': 'asdf', 'description': 'ffff'},
    5: {'img_link': 'assets/author_img.png', 'author_name': 'Search doctor', 'author_role': 'asdf', 'description': '13213'},
    6: {'img_link': 'assets/author_img.png', 'author_name': 'Search doctor', 'author_role': 'asdf', 'description': 'asdf'},
  }

  return (
    <div className="app">
      <div className="header">
        <Navbar />
      </div>
      <div className="main container">
        <Healthcare />
        <Services services={services} />
        <HealthcareLeading />
        <HealthcareApp />
        <CustomersReview sliders={reviews}/>
      </div>
    </div>
  )
}

export default App
