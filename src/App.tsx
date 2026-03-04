import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore';
import * as analytics from './utils/analytics';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/layout/ProtectedRoute';
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const FieldsList = lazy(() => import('./pages/FieldsList'));
const FieldDetails = lazy(() => import('./pages/FieldDetails'));
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const RegisterOwner = lazy(() => import('./pages/auth/RegisterOwner'));
const DashboardLayout = lazy(() => import('./pages/dashboard/DashboardLayout'));
const DashboardIndex = lazy(() => import('./pages/dashboard/DashboardIndex'));
const Bookings = lazy(() => import('./pages/dashboard/Bookings'));
const Favorites = lazy(() => import('./pages/dashboard/Favorites'));
const OwnerFields = lazy(() => import('./pages/dashboard/OwnerFields'));
const OwnerBookings = lazy(() => import('./pages/dashboard/OwnerBookings'));
const AdminUsers = lazy(() => import('./pages/dashboard/AdminUsers'));
const AdminFields = lazy(() => import('./pages/dashboard/AdminFields'));
const Settings = lazy(() => import('./pages/dashboard/Settings'));
const NewField = lazy(() => import('./pages/dashboard/NewField'));
const NotFound = lazy(() => import('./pages/NotFound'));

const About = lazy(() => import('./pages/About'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Contact = lazy(() => import('./pages/Contact'));

const AnalyticsTracker = () => {
    const location = useLocation();
    useEffect(() => {
        analytics.pageview(location.pathname);
    }, [location]);
    return null;
};

const LoadingFallback = () => (
    <div className="flex justify-center items-center h-[50vh]">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
);

function App() {
    const { initializeAuth } = useAuthStore();

    useEffect(() => {
        initializeAuth();
    }, [initializeAuth]);

    return (
        <BrowserRouter>
            <AnalyticsTracker />
            <ErrorBoundary>
                <div className="min-h-screen flex flex-col pt-16 font-sans">
                    <Navbar />
                    <main className="flex-1">
                        <Suspense fallback={<LoadingFallback />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/fields" element={<FieldsList />} />
                                <Route path="/fields/:id" element={<FieldDetails />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/register-owner" element={<RegisterOwner />} />

                                <Route path="/about" element={<About />} />
                                <Route path="/pricing" element={<Pricing />} />
                                <Route path="/terms" element={<Terms />} />
                                <Route path="/privacy" element={<Privacy />} />
                                <Route path="/contact" element={<Contact />} />

                                <Route element={<ProtectedRoute />}>
                                    <Route path="/dashboard" element={<DashboardLayout />}>
                                        <Route index element={<DashboardIndex />} />
                                        <Route path="bookings" element={<Bookings />} />
                                        <Route path="favorites" element={<Favorites />} />
                                        <Route path="settings" element={<Settings />} />
                                        <Route path="owner/fields" element={<OwnerFields />} />
                                        <Route path="owner/bookings" element={<OwnerBookings />} />
                                        <Route path="admin/users" element={<AdminUsers />} />
                                        <Route path="admin/fields" element={<AdminFields />} />
                                    </Route>
                                    <Route path="/fields/new" element={<NewField />} />
                                </Route>

                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </main>
                    <Footer />
                </div>
            </ErrorBoundary>
        </BrowserRouter>
    );
}

export default App;
