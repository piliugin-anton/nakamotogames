interface IPost {
    userId: number
    id: number
    title: string
    body: string
}

interface IUser {
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

interface IPhoto {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

type Post = IPost & { user: IUser };

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await usersResponse.json() as IUser[];
  const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsResponse.json() as IPost[];

  const randomPost = posts[Math.floor(Math.random() * posts.length)];
  const user = users.find((user) => user.id === randomPost.userId) as IUser;

	const postObject: Post = { ...randomPost, user };

	return {
		post: postObject,
    posts: posts.filter((post) => post.id !== postObject.id)
	};
}