import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { Mail, Lock, User, Building, Phone } from 'lucide-react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';

const RegisterOwner = () => {
    const [name, setName] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useAuthStore();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // In a real app, save additional details to Firestore
            setUser({
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                displayName: name,
                role: 'Field Owner',
                createdAt: new Date().toISOString(),
                status: 'pending' // pending approval
            });
            navigate('/dashboard');
        } catch (err: any) {
            setError('Failed to register. Email might be in use.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 relative overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

            <div className="card w-full max-w-lg p-8 relative z-10 border border-gray-800/60 shadow-2xl backdrop-blur-xl bg-surface/80">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-primary mb-2">Partner Application</h1>
                    <p className="text-text-muted">Register to list your fields and accept bookings.</p>
                </div>

                {error && <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6 text-sm">{error}</div>}

                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="label-text">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                                <input type="text" required className="input-field pl-10" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label className="label-text">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                                <input type="text" required className="input-field pl-10" placeholder="01xxxxxxxxx" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="label-text">Business / Club Name</label>
                        <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                            <input type="text" required className="input-field pl-10" placeholder="e.g. Zayed Arena" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <label className="label-text">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                            <input type="email" required className="input-field pl-10" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <label className="label-text">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                            <input type="password" required className="input-field pl-10" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>

                    <p className="text-xs text-text-muted mt-2">By registering, you agree to our Terms of Service for Field Owners.</p>

                    <button type="submit" className="btn-primary w-full py-3 text-lg flex justify-center items-center" disabled={isLoading}>
                        {isLoading ? <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div> : 'Submit Registration'}
                    </button>
                </form>

                <div className="mt-8 text-center border-t border-gray-800 pt-6">
                    <p className="text-text-muted">Already have a partner account? {' '}
                        <Link to="/login" className="text-primary font-semibold hover:underline">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterOwner;
