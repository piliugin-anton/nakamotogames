<ul class="relative p-0 flex justify-center align-center list-none {$$restProps.class}">
    {#each externalLinks as link}
        {#if link.icon}
            <li class="relative mr-[18px] last:mr-0">
                <a href={link.href} class="text-white text-[12px] font-bold">
                    <img src={link.icon} alt={link.description} />
                </a>
            </li>
        {/if}
    {/each}
</ul>

<script lang="ts">
    import facebook from '$lib/icons/facebook.png';
    import facebookDark from '$lib/icons/facebook-dark.png';
	import twitter from '$lib/icons/twitter.png';
    import twitterDark from '$lib/icons/twitter-dark.png';
	import youtube from '$lib/icons/youtube.png';
	import pinterest from '$lib/icons/pinterest.png';
    import pinterestDark from '$lib/icons/pinterest-dark.png';
	import behance from '$lib/icons/behance.png';
    import behanceDark from '$lib/icons/behance-dark.png';

    export let dark: boolean = false

    const externalLinks = [
		{
			icon: dark ? facebookDark : facebook,
			href: 'https://www.facebook.com',
			description: 'Facebook'
		},
		{
			icon: dark ? twitterDark : twitter,
			href: 'https://www.twitter.com',
			description: 'Twitter'
		},
		{
			... !dark ? {
                icon: youtube,
			    href: 'https://www.youtube.com',
			    description: 'YouTube'
            }: {}
		},
		{
			icon: dark ? pinterestDark : pinterest,
			href: 'https://www.pinterest.com',
			description: 'Pinterest'
		},
		{
			icon: dark ? behanceDark : behance,
			href: 'https://www.behance.com',
			description: 'Behance'
		}
	];
</script>