import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex items-center" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-zinc-100 text-xs rounded shadow-lg whitespace-nowrap z-50">
          {text}
        </div>
      )}
    </div>
  );
};
