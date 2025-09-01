
import { readFile,readdir } from "fs/promises"
import matter from "gray-matter"
import { marked } from "marked"
import { title } from "process";
import qs from 'qs';
const Backend_URL = "http://localhost:1337";

export async function getPost(slug) {

// const text = await readFile(`./content/blog/${slug}.md`,'utf8')

//   // pisahkan frontmatter
// const { content, data: { title, description, image, date, author } } = matter(text)

//   // render hanya isi markdown, bukan full text
// const body = marked(content);

// return {slug, title, description, date, author, image, body}
const url =
  `${Backend_URL}/api/posts?`+ qs.stringify(
    {
        filters: { slug: { $eq: slug } },
        fields: ["slug", "title", "description", "publishedAt", "body"],
        populate: { 
        image: {fields:["url"]},
        author: { fields: ["name", "email"] },
        
    }, 
    },
    { encodeValuesOnly: true }
    );
   const response = await fetch(url);
const { data } = await response.json();
const item = data[0];

return {
  slug: item.slug,
    title: item.title,
    description: item.description,
    body: marked(item.body, {headerIds: false, mangle:false}),
    author: item.author.name,
    date: item.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: Backend_URL + item.image.url
}
}

export async function getAllPosts() {
  const url =
  `${Backend_URL}/api/posts?`+  qs.stringify(
      {
        fields: ["slug", "title", "description", "publishedAt", "body"],
        populate: { 
          image: {fields:["url"]},
          author: { fields: ["name", "email"] },
          sort: ["publishedAt:desc"],
      }, 
      },
      { encodeValuesOnly: true }
    );
  
    
  const response = await fetch(url);
  const {data} = await response.json();

  return data.map((item) => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
    author: item.author.name,
    date: item.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: Backend_URL + item.image.url
  
  }));
}


export async function getSlugs() {
 const files = await readdir("./content/blog");
 return files
 .filter((file) =>file.endsWith(".md"))
 .map((file)=>file.slice(0, -".md".length)); 
  
}