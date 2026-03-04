import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { Menu, X, User as UserIcon } from 'lucide-react';
import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, setUser } = useAuthStore();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <nav className="bg-surface border-b border-gray-800 fixed w-full z-50 top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-primary">GoalZone<span className="text-text">Pro</span></span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/fields" className="text-text-muted hover:text-primary transition-colors">Find Fields</Link>
                        <Link to="/pricing" className="text-text-muted hover:text-primary transition-colors">For Owners</Link>

                        {user ? (
                            <div className="flex items-center space-x-4">
                                <Link to="/dashboard" className="flex items-center space-x-2 text-text hover:text-primary">
                                    <UserIcon size={20} />
                                    <span>{user.displayName || 'Dashboard'}</span>
                                </Link>
                                <button onClick={handleLogout} className="btn-secondary text-sm">Logout</button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link to="/login" className="text-text hover:text-primary font-medium">Log in</Link>
                                <Link to="/register" className="btn-primary">Sign up</Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-surface border-b border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/fields" className="block px-3 py-2 text-text hover:text-primary">Find Fields</Link>
                        <Link to="/pricing" className="block px-3 py-2 text-text hover:text-primary">For Owners</Link>
                        {user ? (
                            <>
                                <Link to="/dashboard" className="block px-3 py-2 text-text hover:text-primary">Dashboard</Link>
                                <button onClick={handleLogout} className="block w-full text-left px-3 py-2 text-red-500 hover:text-red-400">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="block px-3 py-2 text-text hover:text-primary">Log in</Link>
                                <Link to="/register" className="block px-3 py-2 text-primary font-bold">Sign up</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
