export type UserRole = 'Guest' | 'Registered User' | 'Field Owner' | 'Admin' | 'Super Admin';

export interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    role: UserRole;
    phoneNumber?: string;
    photoURL?: string | null;
    createdAt: string;
    status: 'active' | 'suspended';
}

export interface Field {
    id: string;
    ownerId: string;
    name: string;
    city: string;
    location: {
        lat: number;
        lng: number;
        address: string;
    };
    pricePerHour: number;
    images: string[];
    amenities: string[];
    description: string;
    workingHours: {
        open: string;
        close: string;
    };
    rating: number;
    reviewsCount: number;
    status: 'active' | 'pending' | 'suspended';
    createdAt: string;
}

export type BookingStatus = 'Pending' | 'Confirmed' | 'Rejected' | 'Cancelled' | 'Completed';

export interface Booking {
    id: string;
    fieldId: string;
    userId: string;
    date: string;
    startTime: string;
    endTime: string;
    totalPrice: number;
    status: BookingStatus;
    paymentMethod: 'Cash' | 'Stripe' | 'Vodafone Cash' | 'Fawry';
    paymentStatus: 'Pending' | 'Paid' | 'Refunded';
    createdAt: string;
}

export interface Review {
    id: string;
    fieldId: string;
    userId: string;
    rating: number;
    comment: string;
    createdAt: string;
}
