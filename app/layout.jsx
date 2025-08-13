import { ReactNode } from "react";
// interface LayoutProps{
//     children: ReactNode;
// }
 
export default function layout({children}){
    return(
    
<html lang="en">
        <head>
            <title>My next.JS FUNDAMENTAL</title>
        </head>
        <body>
            <header>
                [header]
            </header>
            <main>
            {children}
            </main>
            <footer>
                [footer]
            </footer>
        </body>
</html>
    )
}

//layout ini akan diimplementasikan oleh file file yang ada didalam folder app ini
//tetapi jika masing masing folder yang didalam folder app ini punya layout sendiri
//maka layout yang didalam masing masing folder akan digunakan. 


