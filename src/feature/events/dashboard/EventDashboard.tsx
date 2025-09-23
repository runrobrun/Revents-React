import {EventCard} from './EventCard.tsx';
import EventForm from '../form/EventForm.tsx';
import {events} from '../../../lib/data/sampleData.tsx';
import {useEffect, useState} from 'react';
import type {AppEvent} from '../../../lib/types';
import { AnimatePresence, motion } from 'motion/react';

type Props = {
    formOpen: boolean;
    setFormOpen: (open: boolean) => void;
    formToggle: (event: AppEvent | null) => void;
    selectedEvent: AppEvent | null;
}

export default function EventDashboard({formOpen, setFormOpen, formToggle, selectedEvent}: Props) {
    const [appEvents, setAppEvents] =  useState<AppEvent[]>([]);


    const handleCreateEvent = (event: AppEvent) => {
        setAppEvents(prevState => [...prevState, event]);
    }

    const handleUpdateEvent = (updatedEvent: AppEvent) => {
        setAppEvents(prevState => {
            return prevState.map(e => e.id === updatedEvent.id ? updatedEvent : e);
        })
    }

    const handleDeleteEvent = (eventId: string) => {
        setAppEvents(prevState => prevState.filter(e => e.id !== eventId));
    }

    useEffect(() => {
        setAppEvents(events);

        return () => { setAppEvents([]); }
    }, []);

    return (
        <div className="flex flex-row w-full gap-6">
            <div className="w-3/5 ">
                <AnimatePresence>
                    <motion.div
                    initial={{ opacity: 0, x: -200}}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -200 }}
                    transition={{ duration: 0.6, type: 'tween' }}>
                        <div className="flex flex-col gap-4">
                            {appEvents.map((event) => (
                                <EventCard
                                    key={event.id}
                                    event={event}
                                    formToggle={formToggle!}
                                    deleteEvent={handleDeleteEvent}
                                />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="w-2/5 overflow-hidden">
                <AnimatePresence>
                    {formOpen && (
                        <motion.div
                        initial={{ opacity: 0, x: 200}}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        transition={{ duration: 0.6, type: 'tween' }}>
                            <EventForm
                                key={selectedEvent?.id || 'new'}
                                setFormOpen={setFormOpen}
                                createEvent={handleCreateEvent}
                                selectedEvent={selectedEvent}
                                updateEvent={handleUpdateEvent}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
