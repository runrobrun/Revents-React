export type AppUser = {
    uid: string;
    displayName: string;
    email: string;
    photoURL?: string;
}

export type AppEvent = {
    id: string;
    title: string;
    date: string; // ISO string
    description: string;
    category: string;
    city: string;
    venue: string;
    hostUid: string;
    attendees: Attendee[];
    attendeeIds: string[];
    latitude?: number;
    longitude?: number;
}

export type Attendee = {
    id: string;
    displayName: string;
    photoURL?: string;
    isHost?: boolean;
}
