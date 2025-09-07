
import { marked } from "marked"
import qs from 'qs';

const Backend_URL = "http://localhost:1337";

export async function getPost(slug) {
const { data } = await fetchPost({
   
        filters: { slug: { $eq: slug } },
        fields: ["slug", "title", "description", "publishedAt", "body"],
        populate: { 
        image: {fields:["url"]},
        author: { fields: ["name", "email"] },
        
    }, 
    
});

if (data.length === 0 ){
  return null;
}

const item = data[0];
return {
    ...toPost(item),
    body: marked(item.body, {headerIds: false, mangle:false}),
  
}
}

export async function getAllPosts() {
  const { data } = await fetchPost({
     
        fields: ["slug", "title", "description", "publishedAt", "body"],
        populate: { 
          image: {fields:["url"]},
          author: { fields: ["name", "email"] },
          sort: ["publishedAt:desc"],
      }, 
      
  });

  return data.map(toPost);
}


export async function getSlugs() {
 const { data } = await fetchPost({
  fields: ["slug"], 
  sort: ["publishedAt:desc"],
  pagination: {pageSize: 100}
 });

  return data.map((item) => item.slug);
  
}

async function fetchPost(parameters) {
    const url =
  `${Backend_URL}/api/posts?`+  qs.stringify(parameters, { encodeValuesOnly: true });
  
    
  const response = await fetch(url, {
    next:{
      revalidate: 30,
    }
  });
  return await response.json();
  
}

function toPost(item){
  return {
    slug: item.slug,
    title: item.title,
    description: item.description,
    author: item.author.name,
    date: item.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: Backend_URL + item.image.url
  
  }
}

