"use client"

import {LinkIcon} from "@heroicons/react/20/solid";
import { useState } from "react";

export default function ShareLinkButton(){
    const [copied, setCopied] = useState(false);

    function handleClick(){
       navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false),1500)
        }

    return (
       
        <button onClick={handleClick} className="border flex gap-1 items-center px-2 py-1 rounded text-gray-500 text-sm hover:bg-black hover:text-white">
           
            <LinkIcon className="h-4 w-4"/>

            {copied ? "Link Copied" : "Share link"}
            </button>
     
    );
}