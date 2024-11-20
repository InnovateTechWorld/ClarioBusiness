import { motion } from 'framer-motion';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/assets/background.jpg)',
          filter: 'brightness(0.9)'
        }}
      />
      <div className="w-full max-w-2xl relative z-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
