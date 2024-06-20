<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section
	class="bg-cover bg-bo-repeat bg-[url('$lib/images/home-bg.png')] flex justify-center items-center w-full h-[600px]"
>
	<div class="w-[530px] text-center">
		<Badge text="Fashion" class="mb-[13px]" />
		<h1 class="title capitalize font-bold text-[36px] text-white mb-[13px]">
			{post.title}
		</h1>
		<h3 class="subtitle capitalize text-[12px] text-[#e5e5e5] mb-[13px]">
			{post.body}
		</h3>
		<h2 class="title font-bold text-[12px] text-white">
			By {post.user.name}
		</h2>
	</div>
</section>

<section
	class="bg-white flex items-start px-[70px] py-[100px] max-w-[1080px] mx-auto"
>
	<div class="datetime flex items-center min-w-[168px] mr-[53px]">
		<span class="font-bold text-[12px] text-[#495057]"> 20.06.2024 </span>
		<hr class="w-[35px] mx-[8px]" />
		<span class="font-bold text-[12px] text-[#495057]"> 4 minutes </span>
	</div>

	<div class="body font-normal text-[14px]">
		<p class="mb-[50px]">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
			eros in elit malesuada fringilla. Suspendisse tincidunt id diam eu
			auctor. Ut accumsan in lectus eu volutpat. Donec eu velit leo. Etiam
			rhoncus massa in volutpat fringilla. Morbi a nulla et orci
			pellentesque elementum eu rhoncus felis. Proin risus velit,
			ultricies eu leo at, vestibulum condimentum tellus. Nunc quis
			faucibus nisi. Nam fermentum, nulla eu euismod tincidunt, nunc
			tellus maximus lorem, non tincidunt metus tellus in magna. Aenean in
			interdum enim, et pretium est. Nunc varius consequat malesuada.
			Maecenas quis mauris vel ipsum gravida volutpat. Nunc est elit,
			porttitor non faucibus a, laoreet id tortor.
			<br /><br />

			<span class="font-bold text-[36px] text-[#d4a373]">
				“Monotonectally seize superior mindshare rather than efficient
				technology.”
			</span>

			<br /><br />
			Etiam sagittis nibh tincidunt est euismod lobortis. Mauris quam nulla,
			venenatis vitae pretium in, congue id libero. Vivamus auctor lectus quam,
			vitae imperdiet ipsum vestibulum condimentum. In id orci in lorem sollicitudin
			consequat. Nam pharetra nunc interdum leo aliquam, ut laoreet velit tempus.
			Phasellus nec fermentum justo. Etiam sed placerat nunc, id scelerisque
			tellus. Nullam porta dui eget felis ultrices interdum ac ut sapien. Donec
			imperdiet, metus id ullamcorper ultrices, tellus metus egestas mi, eu
			laoreet elit erat tincidunt arcu. Integer vel dui ac ex scelerisque condimentum.
			Vestibulum hendrerit lacus non dolor porttitor, vitae vestibulum est
			efficitur. Nulla facilisi. Cras risus ligula, lacinia et ligula eu, posuere
			ultricies massa. Nulla eu mattis lectus, non sodales velit. In hac habitasse
			platea dictumst. Aliquam aliquet efficitur ipsum, id aliquet urna rutrum
			et.
			<br /><br />
			Fusce scelerisque, felis a gravida posuere, dolor metus bibendum velit,
			porta fringilla arcu magna et arcu. Aliquam erat volutpat. Praesent sit
			amet ipsum neque. Maecenas feugiat sagittis nisl in aliquet. Pellentesque
			vitae metus ligula. Pellentesque ac ligula et orci euismod porta. Curabitur
			a neque leo. Class aptent taciti sociosqu ad litora torquent per conubia
			nostra, per inceptos himenaeos. Vivamus mattis justo porta odio posuere,
			eget imperdiet ligula placerat.
		</p>

		<div class="flex pb-[50px] border-b-[1px] mx-[-7px] mb-[50px]">
			{#each tags as tag}
				<Badge text={tag} light class="mx-[7px]" />
			{/each}
		</div>

		<div class="flex justify-between items-center">
			<div class="flex items-center">
				<img src={userPhoto} alt={post.user.name} class="mr-[17px]" />
				<div class="author text-[12px] font-bold">
					<span class="text-[#495057]">
						By
					</span>
					<span class="text-[#343a40]">
						{post.user.name}
					</span>
					<span class="block font-normal text-[#6c757d]">
						Thinker & Designer
					</span>
				</div>
			</div>

			<SocialNetworks dark />
		</div>
	</div>
</section>

<section class="bg-[#e5e5e5]/30 px-[70px] py-[100px]">
	<div class="max-w-[1440px] mx-auto">
		<h2 class="related-posts text-[18px] text-[#495057] font-bold mb-[50px]">
			Related posts
		</h2>

		<swiper-container slides-per-view="3" speed="500" loop="true">
			{#each data.posts as post}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<swiper-slide on:click={handleChangePost(post.id)}>
					<div class="relative flex items-end w-[420px] h-[350px] rounded-[5px] cursor-pointer bg-no-repeat bg-cover bg-[url('https://dummyimage.com/420x350/000/222')]">
						<Badge text="Fashion" class="absolute top-[20px] right-[20px]" />
						<div class="px-[40px] pb-[42px] h-[60%]">
							<span class="block datetime text-[12px] text-[#e5e5e5] mb-[15px]">
								20.06.2024
							</span>
							<span class="block title text-white capitalize font-bold mb-[15px]">
								{post.title}
							</span>
							<span class="block title text-[#e5e5e5] capitalize font-normal mb-[15px]">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ea repellendus molestias.
							</span>
						</div>
					</div>
				</swiper-slide>
			{/each}
		  </swiper-container>
	</div>
</section>

<script lang="ts">
	// import function to register Swiper custom elements
	import { register } from 'swiper/element/bundle';
	import Badge from "../components/badge.svelte";
	import SocialNetworks from '../components/social-networks.svelte';
	import userPhoto from '$lib/images/user-photo.png';
	import type { PageData } from './$types';
	import type { Post, IPost, IUser } from './+page';

	/** @type {import('./$types').PageData} */
	export let data: PageData & { posts: IPost[], users: IUser[] };

	const tags = ["Adventure", "Photo", "Design"];
	let post: Post;

	
	setRandomPost();
	// register Swiper custom elements
	register();

	function handleChangePost(id: number) {
		const postFound = data.posts.find((post) => post.id === id) as IPost;
  		const user = data.users.find((user: { id: number }) => user.id === postFound.userId) as IUser;

		post = { ...postFound, user };
	}

	function setRandomPost() {
		const randomPost: IPost = data.posts[Math.floor(Math.random() * data.posts.length)];
  		const user = data.users.find((user: { id: number }) => user.id === randomPost.userId) as IUser;

		post = { ...randomPost, user };
	}
</script>

<style lang="scss">
	.title,
	.subtitle,
	.datetime,
	.body,
	.author,
	.related-posts {
		font-family: var(--font-family);
	}
</style>
