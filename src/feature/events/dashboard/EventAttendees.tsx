import type {Attendee} from '../../../lib/types';

type Props = {
    attendees: Attendee[]
}

export function EventAttendees({attendees}: Props) {
    return (
        <div className="avatar-group -space-x-5">
            {attendees.map(attendee => (
                <div key={attendee.id} className="avatar">
                    <div className="w-12">
                        <img src={attendee.photoURL || '/user.png'} />
                    </div>
                </div>
            ))}
        </div>
    );
}
