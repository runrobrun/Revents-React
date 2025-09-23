import EventDashboard from '../../feature/events/dashboard/EventDashboard.tsx';
import {NavBar} from './nav/NavBar.tsx';
import {useState} from 'react';
import type {AppEvent} from '../../lib/types';

function App() {
    const [formOpen, setFormOpen] =  useState(false);
    const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

    const handleFormToggle = (event: AppEvent | null) => {
        if (formOpen) {
            setFormOpen(false);
            setTimeout(() => {
                setSelectedEvent(event);
                setFormOpen(true);
            }, 300)
        } else {
            setSelectedEvent(event);
            setFormOpen(true);
        }
    }

    return (
      <div>
         <NavBar formToggle={handleFormToggle} />
          <div className="container mx-auto px-10 mt-24">
              <EventDashboard
                formOpen={formOpen}
                setFormOpen={setFormOpen}
                formToggle={handleFormToggle}
                selectedEvent={selectedEvent}
              />
          </div>
      </div>
    )
}

export default App
