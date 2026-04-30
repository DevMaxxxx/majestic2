import React from "react";

export const Button = ({ type = "button", children, primary = false, width = "250px", height = "60px" }) => (
    <button
        type={type}
        className={`flex items-center justify-center text-black rounded-[12px] border-none outline-none w-[${width}] h-[${height}] ${
            primary ? "bg-[var(--inscription-text)]" : "bg-transparent hover:bg-gray-200"
        }`}
    >
        {children}
    </button>
);