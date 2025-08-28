import { writeFileSync } from "node:fs";




const file = 'scripts/strapi-response.json'
writeFileSync(file, posts, 'utf8')