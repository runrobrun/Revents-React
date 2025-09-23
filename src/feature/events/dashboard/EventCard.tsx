import {EventAttendees} from './EventAttendees.tsx';
import type {AppEvent} from '../../../lib/types';

type Props = {
    event: AppEvent,
    formToggle: (event: AppEvent) => void,
    deleteEvent: (eventId: string) => void
}

export function EventCard({event, formToggle, deleteEvent}: Props) {
    const host = event.attendees.find(x => x.id === event.hostUid );

    return (
        <div className="card card-border bg-base-100 w-full">
            <div className="card-body">
                <div className="flex items-center gap-3">
                    <figure className="w-14 rounded-lg card-figure">
                        <img
                            src={host?.photoURL || '/user.png'}
                            alt="User Avatar" />
                    </figure>
                    <div>
                        <h2 className="card-title">{event.title}</h2>
                        <p className="text-sm text-neutral">Hosted by {host?.displayName}</p>
                    </div>
                </div>
                <div className="bg-base-200 -mx-6 my-3 px-4 border-y py-2 border-neutral/20">
                    <EventAttendees attendees={event.attendees} />
                </div>
                <div className="card-actions flex">
                    <div className="flex flex-1">
                        {event.description}
                    </div>
                    <div className="flex gap-3">
                        <button onClick={() => deleteEvent(event.id)} className="btn btn-error">Delete</button>
                        <button onClick={() => formToggle(event)} className="btn btn-primary">View</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
