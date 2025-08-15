import Link from "next/link"
export default function layout({children}){
    return(
    
<html lang="en">
        <head>
            <title>My next.JS FUNDAMENTAL</title>
        </head>
        <body>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact" prefetch={false}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
            {children}
            </main>
            <footer>
               <hr />
               <span>i'm here to stay footer</span>
            </footer>
        </body>
</html>
    )
}

//layout ini akan diimplementasikan oleh file file yang ada didalam folder app ini
//tetapi jika masing masing folder yang didalam folder app ini punya layout sendiri
//maka layout yang didalam masing masing folder akan digunakan. 


