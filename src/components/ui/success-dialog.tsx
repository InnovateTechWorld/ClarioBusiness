import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SuccessDialog: React.FC<SuccessDialogProps> = ({ 
  open, 
  onOpenChange 
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={() => onOpenChange(false)}
      />
      
      {/* Dialog */}
      <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4 text-center">
        <CheckCircleIcon className="mx-auto h-12 w-12 text-emerald-500" />
        <h2 className="mt-4 text-xl font-semibold text-emerald-900">Thank You!</h2>
        <p className="mt-2 text-emerald-700">
          Your information has been submitted successfully. We'll be in touch when we launch!
        </p>
        <button
          onClick={() => onOpenChange(false)}
          className="mt-6 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:text-sm"
        >
          Got it
        </button>
      </div>
    </div>
  );
};