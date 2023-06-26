"use client"

import React, { useState } from 'react';

interface ToolTipProps {
    text: string
    children: React.ReactNode
}

const Tooltip: React.FC<ToolTipProps> = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {showTooltip && (
                <div className="absolute z-30 bg-gray-800 text-white p-2 rounded-md whitespace-nowrap -top-5 right-0">
                    <span className="text-xs">{text}</span>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
