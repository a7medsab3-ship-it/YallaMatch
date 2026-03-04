import { create } from 'zustand';
import { User } from '../types';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

interface AuthState {
    user: User | null;
    setUser: (user: User | null) => void;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isLoading: true,
    setUser: (user) => set({ user }),
    setIsLoading: (isLoading) => set({ isLoading }),
    initializeAuth: () => {
        onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                set({
                    user: {
                        uid: firebaseUser.uid,
                        email: firebaseUser.email,
                        displayName: firebaseUser.displayName,
                        role: 'Registered User',
                        createdAt: new Date().toISOString(),
                        status: 'active'
                    },
                    isLoading: false
                });
            } else {
                set({ user: null, isLoading: false });
            }
        });
    }
}));
