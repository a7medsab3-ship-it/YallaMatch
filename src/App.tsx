import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import FieldsList from './pages/FieldsList';
import FieldDetails from './pages/FieldDetails';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import RegisterOwner from './pages/auth/RegisterOwner';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import DashboardIndex from './pages/dashboard/DashboardIndex';
import Bookings from './pages/dashboard/Bookings';
import Favorites from './pages/dashboard/Favorites';
import OwnerFields from './pages/dashboard/OwnerFields';
import OwnerBookings from './pages/dashboard/OwnerBookings';
import AdminUsers from './pages/dashboard/AdminUsers';
import AdminFields from './pages/dashboard/AdminFields';
import Settings from './pages/dashboard/Settings';
import NewField from './pages/dashboard/NewField';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/layout/ProtectedRoute';

import About from './pages/About';
import Pricing from './pages/Pricing';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col pt-16 font-sans">
                <Navbar />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/fields" element={<FieldsList />} />
                        <Route path="/fields/:id" element={<FieldDetails />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/register-owner" element={<RegisterOwner />} />

                        {/* Information Pages */}
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
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
