type Props = {
    setFormOpen: (isOpen: boolean) => void;
}

export default function EventForm({ setFormOpen }: Props) {
    return (
        <div className="card bg-base-100 p-4 flex flex-col gap-3 w-full">
            <h3 className="text-xl font-semibold text-center text-primary">Create Event</h3>
            <form className="flex flex-col gap-3 w-full">
                <input type="text" placeholder="Event Title" className="input input-lg w-full" />
                <input type="text" placeholder="Category" className="input input-lg w-full" />
                <textarea placeholder="description" className="textarea textarea-lg w-full" />
                <input type="text" placeholder="Date" className="input input-lg w-full" />
                <input type="text" placeholder="City" className="input input-lg w-full" />
                <input type="text" placeholder="Venue" className="input input-lg w-full" />
                <div className="flex justify-end w-full gap-3">
                    <button onClick={() => setFormOpen(false)} type="button" className="btn btn-neutral">Cancel</button>
                    <button type="submit" className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    );
}

