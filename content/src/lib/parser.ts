import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import type { Node } from 'unist';
import type { VFile } from 'vfile';
import { matter } from 'vfile-matter';
// import rehypeDocument from 'rehype-document';

const handleYamlMatter = () => {
  return (tree: Node, file: VFile): void => {
    matter(file);
  };
};

export const parser = async (file: string) => {
  const res = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    // .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(remarkFrontmatter)
    .use(handleYamlMatter)
    .process(file);

  return {
    frontmatter: res.data.matter,
    content: res.value,
  };
};
