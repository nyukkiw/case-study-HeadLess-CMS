import Link from "next/link"
export default function BlogPage(){
    return (
        <>
    <h1>blog</h1>
        <p>list of post</p>
        {/* <header> */}
        <nav>
                    <ul>
                        <li>
                            <Link href="/blog/belajar-nextjs">belajr-nextjs</Link>
                        </li>
                        <li>
                            <Link href="/blog/latihan-route-next">latihan-routeNext</Link>
                        </li>
                    </ul>
        </nav>
        {/* </header> */}


        </>
)
}


