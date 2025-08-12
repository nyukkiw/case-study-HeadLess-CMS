export default function layout({children}){
    return(
        
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

