import NavBar from "../components/NavBar"
import { roboto } from "./Fonts"
import './globals.css'

export default function layout({children}){
    return(
    
<html lang="en" className={roboto.variable}>
        <head>
            <title>My next.JS FUNDAMENTAL</title>
        </head>
        <body className="bg-gray-500 flex flex-col px-4 py-4 min-h-screen">
            <header>
               <NavBar />
            </header>

            <main className="py-3 grow">
            {children}
            </main>

            <footer className="border-t py-3 text-center text-xs">
               <span>i'm here to stay footer</span>
            </footer>
        </body>
</html>
    )
}

//layout ini akan diimplementasikan oleh file file yang ada didalam folder app ini
//tetapi jika masing masing folder yang didalam folder app ini punya layout sendiri
//maka layout yang didalam masing masing folder akan digunakan. 


