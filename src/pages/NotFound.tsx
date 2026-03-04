const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-black text-primary drop-shadow-[0_0_20px_rgba(57,255,20,0.5)]">404</h1>
            <h2 className="text-3xl font-bold mt-4 mb-6">Offside!</h2>
            <p className="text-text-muted text-lg max-w-md mb-8">
                The page you are looking for has been moved, deleted, or possibly never existed.
            </p>
            <a href="/" className="btn-primary flex items-center gap-2">
                Return to Pitch
            </a>
        </div>
    );
};

export default NotFound;
