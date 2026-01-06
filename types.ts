
export type Category = 'Tech' | 'Life' | 'Travel' | 'All';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: Category;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
}
