'use client'

import { useEffect } from "react";

export default function Home(){

    useEffect(()=>{
        window.alert("hello next.js");
    }, []);

    console.log('hello world');
    return (
        <>
    <h1>next js app</h1>
        <p>hello world</p>
        </>
)
}


