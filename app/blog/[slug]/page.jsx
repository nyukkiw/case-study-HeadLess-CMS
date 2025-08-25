import Heading from "@/components/Heading"
import ShareLinkButton from "@/components/ShareLinkButton";
import { getPost, getSlugs } from "@/lib/post";



export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug)=>({slug}));
}




export async function generateMetadata({params}) {
  const {slug} = await params;
  const post = await getPost(slug);
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
      
      <div className="flex gap-3 pb-2 items-baseline">
      <p className="italic text-sm pb-2">{post.date} - {post.author}</p>
      <ShareLinkButton/>
      </div>

      <img src={post.image} alt={post.title} width={300} height={350} className="mb-2 rounded"/>
      <article
        className="max-w-screen-sm prose prose-slate"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </>
  )
}
