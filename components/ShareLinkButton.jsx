"use client"

import { useState } from "react";

export default function ShareLinkButton(){
    const [copied, setCopied] = useState(false);

    function handleClick(){
       navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false),1500)
        }

    return (
       
        <button onClick={handleClick} className="border px-2 py-1 rounded text-gray-500 text-sm hover:bg-black hover:text-white">
            {copied ? "Link Copied" : "Share link"}</button>
     
    );
}