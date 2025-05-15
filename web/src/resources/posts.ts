export type Post = {
  id: string;
  frontmatter: Record<string, string>;
  content: string;
}

export type Posts = Array<Post>
