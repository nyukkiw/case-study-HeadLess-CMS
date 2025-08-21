
import Heading from "@/components/Heading"
import PostCard from "@/components/PostCard"

export default function BlogPage(){
    return (
        <>
    <Heading>blog</Heading>
        <h2 className="text-2xl mb-3">list of post</h2>
        
             


        <PostCard 
        title="Belajar Next.js" 
        href="/blog/belajar-nextjs"
         image="/images/20230204_082308.jpg"
         description="Belajar Next.js" 
         date="13.01.2022"
          author="Admin"/>
        <PostCard 
        title="Belajar Next.js" 
        href="/blog/belajar-nextjs"
         image="/images/20230204_082308.jpg"
         description="Belajar Next.js" 
         date="13.01.2022"
          author="Admin"/>
        
        



        


        </>
)
}


