<header class="absolute top-0 left-0 flex flex-col lg:flex-row w-full lg:h-[80px] justify-between bg-black/20 px-[24px] py-[29px] lg:px-[70px]">
	<a href="/" class="title font-bold no-underline text-[#f8f9fa] text-[20px] uppercase mb-[16px] lg:mb-0">
		Runo
	</a>

	<nav class="flex flex-wrap justify-center">
		<ul class="relative p-0 flex justify-center align-center list-none lg:border-r-[1px] px-[17px] w-full mb-[24px] lg:w-auto lg:mb-0">
			{#each pageLinks as link}
				<li class="relative mr-[25px]" aria-current={$page.url.pathname === link.href ? 'page' : undefined}>
					<a href={link.href} class="text-white text-[12px] font-bold">
						{link.text}
					</a>
				</li>
			{/each}
		</ul>

		<SocialNetworks class="lg:border-r-[1px] px-[17px] shrink-0" />

		<button type="button" class="px-[17px]">
			<img src={search} alt="Search" />
		</button>
	</nav>
</header>

<script lang="ts">
	import { page } from '$app/stores';
	import SocialNetworks from '../components/social-networks.svelte';
	import search from '$lib/icons/search.png';

	const pageLinks = [
		{
			text: 'Home',
			href: '/'
		},
		{
			text: 'About',
			href: '/about'
		},
		{
			text: 'Articles',
			href: '/articles'
		},
		{
			text: 'Contact us',
			href: '/contact'
		}
	];
</script>

<style lang="scss">
	.title {
		font-family: var(--third-family);
	}
	nav {
		li {
			&:last-child {
				margin-right: 0;
			}

			a {
				font-family: var(--second-family);
			}

			&[aria-current="page"]::after {
				content: '';
				width: 100%;
				height: 2px;
				position: absolute;
				top: 100%;
				left: 0;
				background-color:#d4a373;
			}
		}
	}
</style>
