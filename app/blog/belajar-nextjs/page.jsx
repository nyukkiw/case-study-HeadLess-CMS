import Heading from "@/components/Heading"
import { readFile } from "fs/promises"
import { marked } from "marked"

export default async function PostPage(){
    // const text = await readFile('./content/blog/belajar-nextjs.md','utf8')
    // const html = marked(text)
    let html = ""
  
  try {
    const text = await readFile('./content/blog/belajar-nextjs.md', 'utf8')
    html = marked(text)
  

  } catch (error) {
    console.error("Error reading markdown file:", error)
    return <div>Error loading content</div>
  }
    
    return (
        <>
    <Heading>belajar nextjs</Heading>
    <img src="/images/20230204_082308.jpg" alt="" width={300} height={350} className="mb-2 rounded"/>
    <article dangerouslySetInnerHTML={{__html:html}}   className="max-w-screen-sm prose prose-slate"/>
    </>
)
}


