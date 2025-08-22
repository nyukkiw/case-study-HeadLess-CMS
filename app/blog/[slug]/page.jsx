import Heading from "@/components/Heading"
import { getPost } from "@/lib/post";

export async function generateMetadata({params}) {
  const {slug} = await params;
  const post = await getPost(slug);
  console.log(post.title)
  return{
    title: post.title,
    description: post.description
  }
  
}

export default async function PostPage({ params}) {
  
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <>
      <Heading>{post.title}</Heading>
      <p className="italic text-sm pb-2">{post.date} - {post.author}</p>
      <img src={post.image} alt={post.title} width={300} height={350} className="mb-2 rounded"/>
      <article
        className="max-w-screen-sm prose prose-slate"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </>
  )
}
