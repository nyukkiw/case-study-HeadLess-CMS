
import Heading from "@/components/Heading"
import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard"
import { getAllPosts } from "@/lib/post"


export const revalidate = 30;


export const metadata = {
    title: 'blog',
    
}

export default async function BlogPage({ searchParams}){
  const page = parsePageParam(searchParams.page);
  const {pageCount,posts} = await getAllPosts(3, page);
  
  
  return (
        <>
    <Heading>blog</Heading>
        <h2 className="text-2xl mb-3">list of post</h2>
        <Pagination href="/blog" page={page} pageCount={pageCount}/>
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


function parsePageParam(paramValue){
  if(paramValue){
    const page = parseInt(paramValue);
    if(isFinite(page)&&page>0){
      return page;
    }
  }
  return 1;
}


