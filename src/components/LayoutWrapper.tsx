'use client';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <div className="w-full">
      {/* Main content */}
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
