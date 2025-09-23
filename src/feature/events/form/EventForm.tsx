import type {AppEvent} from '../../../lib/types';
import {users} from '../../../lib/data/sampleData.tsx';

type Props = {
    setFormOpen: (isOpen: boolean) => void;
    createEvent: (event: AppEvent) => void;
    selectedEvent: AppEvent | null;
    updateEvent: (event: AppEvent) => void;
}

export default function EventForm({ setFormOpen, createEvent, selectedEvent, updateEvent }: Props) {
    const initialValue = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const onSubmit = (formData: FormData) => {
        const data = Object.fromEntries(formData.entries()) as unknown as AppEvent;

        if (selectedEvent) {
            updateEvent({
                ...selectedEvent,
                ...data,
                date: new Date(data.date).toISOString()
            });
            setFormOpen(false);
            return;
        } else {
            createEvent(
                {
                    ...data,
                    id: crypto.randomUUID(),
                    hostUid: users[0].uid,
                    attendees: [
                        {
                            id: users[0].uid,
                            displayName: users[0].displayName,
                            photoURL: users[0].photoURL,
                            isHost: true
                        }]
                });
            setFormOpen(false);
        }

    }

    return (
        <div className="card bg-base-100 p-4 flex flex-col gap-3 w-full">
            <h3 className="text-xl font-semibold text-center text-primary">
                {selectedEvent ? 'Edit Event' : 'Create New Event'}
            </h3>
            <form action={onSubmit} className="flex flex-col gap-3 w-full">
                <input
                    defaultValue={initialValue.title}
                    name='title'
                    type="text"
                    placeholder="Event Title"
                    className="input input-lg w-full" />
                <input
                    defaultValue={initialValue.category}
                    name='category'
                    type="text"
                    placeholder="Category"
                    className="input input-lg w-full" />
                <textarea
                    defaultValue={initialValue.description}
                    name='description'
                    placeholder="description"
                    className="textarea textarea-lg w-full" />
                <input
                    defaultValue={initialValue.date ? new Date(initialValue.date).toISOString().slice(0, 16) : ''}
                    name='date'
                    type="datetime-local"
                    placeholder="Date"
                    className="input input-lg w-full" />
                <input
                    defaultValue={initialValue.city}
                    name='city'
                    type="text"
                    placeholder="City"
                    className="input input-lg w-full" />
                <input
                    defaultValue={initialValue.venue}
                    name='venue'
                    type="text"
                    placeholder="Venue"
                    className="input input-lg w-full" />
                <div className="flex justify-end w-full gap-3">
                    <button onClick={() => setFormOpen(false)} type="button" className="btn btn-neutral">Cancel</button>
                    <button type="submit" className="btn btn-primary">
                        {selectedEvent ? 'Update' : 'Create'}
                    </button>
                </div>
            </form>
        </div>
    );
}

