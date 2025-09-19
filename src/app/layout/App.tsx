import EventDashboard from '../../feature/events/dashboard/EventDashboard.tsx';
import {NavBar} from './nav/NavBar.tsx';
import {useState} from 'react';

function App() {
    const [formOpen, setFormOpen] =  useState(false);

    return (
      <div>
         <NavBar setFormOpen={setFormOpen} />
          <div className="container mx-auto px-10 mt-24">
              <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
          </div>
      </div>
    )
}

export default App
