import fs from 'fs';
import path from 'path';
import url from 'url';

import { parser } from './parser';

const POST_DIR = path.resolve(
  url.fileURLToPath(import.meta.url),
  '../../../posts',
);

export const getPostIds = () => {
  const ids = fs
    .readdirSync(POST_DIR)
    .map(filename => {
      return filename
        .split('.')
        .slice(0,-1)
        .join('.');
    });
  return ids;
};

export const getPostById = async (id) => {
  const file = fs.readFileSync(`${POST_DIR}/${id}.md`, 'utf8');
  const parsedFile = await parser(file);
  const post = { ...parsedFile, id };
  return post;
};

// export const getPosts = () => {
//   const ids = getPostIds();

//   const allPosts = ids.map((id) => {
//     const file = fs.readFileSync(`${POST_DIR}/${id}.md`);
//     // const post = { ...markdownParser(file), id };
//     const post = { ...parser(file), id };
//     return post;
//   });
// };
