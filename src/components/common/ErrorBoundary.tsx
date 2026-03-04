import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="min-h-screen flex items-center justify-center bg-background text-text p-4">
                        <div className="text-center max-w-md">
                            <h1 className="text-4xl font-bold text-primary mb-4">Something went wrong</h1>
                            <p className="text-text-muted mb-8">
                                We apologize for the inconvenience. A critical error occurred.
                                Please try refreshing the page or contact support if the issue persists.
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="btn-primary"
                            >
                                Refresh Page
                            </button>
                        </div>
                    </div>
                )
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
