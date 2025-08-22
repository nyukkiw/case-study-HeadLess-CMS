
import Heading from "@/components/Heading"
import PostCard from "@/components/PostCard"
import { getAllPosts } from "@/lib/post"

export const metadata = {
    title: 'blog',
    
}

export default async function BlogPage(){
  const posts = await getAllPosts();
  
  
  return (
        <>
    <Heading>blog</Heading>
        <h2 className="text-2xl mb-3">list of post</h2>
        
        {posts.map((post)=>(
        <PostCard 
        key={post.slug}
        title={post.title}
        href={`/blog/${post.slug}`}
         image={post.image}
         description={post.description} 
         date={post.date}
          author={post.author}/>
        
        ))}
             


       
      


        


        </>
)
}


