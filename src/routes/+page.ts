export interface IPost {
    userId: number
    id: number
    title: string
    body: string
}

export interface IUser {
    id: number
    name: string
    username: string
    email: string
    address: {
      street: string
      suite: string
      city: string
      zipcode: string
      geo: {
        lat: string
        lng: string
      }
    },
    phone: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }
}

export type Post = IPost & { user: IUser };

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await usersResponse.json() as IUser[];
  const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsResponse.json() as IPost[];

  return { posts, users }
}