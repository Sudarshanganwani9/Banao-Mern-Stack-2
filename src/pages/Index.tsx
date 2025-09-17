import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Feed } from '@/components/Feed';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-xl text-muted-foreground">Loading...</h2>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center space-y-6">
          <div>
            <h1 className="mb-4 text-4xl font-bold">Welcome to Social Feed</h1>
            <p className="text-xl text-muted-foreground">Connect, share, and engage with your community</p>
          </div>
          <Button asChild>
            <a href="/auth">Get Started</a>
          </Button>
        </div>
      </div>
    );
  }

  return <Feed />;
};

export default Index;
