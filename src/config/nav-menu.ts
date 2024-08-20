import type {NavMenuConfig} from '@/types';

import myImage1 from '../assets/releases/starlog-placeholder-1.jpg';
import myImage2 from '../assets/releases/starlog-placeholder-2.jpg';

export const navMenuConfig: NavMenuConfig = {
	links: [{title: 'Portfolio', href: '/astro-blog/portfolio'}],
	// pagesNav: [
	// 	{
	// 		title: 'Pages',
	// 		items: [
	// 			{
	// 				title: 'Landing',
	// 				href: '/landing',
	// 				description:
	// 					'A landing page template with differents sections.',
	// 				image: '/images/examples/landing.jpg',
	// 			},
	// 			{
	// 				title: 'Changelog',
	// 				href: '/releases',
	// 				description:
	// 					'A reproduction of Starlog template with Tailwind CSS.',
	// 				image: '/images/examples/changelog.jpg',
	// 			},
	// 			{
	// 				title: 'Waitlist',
	// 				href: '/waitlist',
	// 				description:
	// 					'A waitlist form using Astro DB, React Hook Form & Sonner. Static page.',
	// 				image: '/images/examples/waitlist.jpg',
	// 				forceReload: true,
	// 			},
	// 			{
	// 				title: 'Pricing',
	// 				href: '/pricing',
	// 				description:
	// 					'Pricing cards, FAQs and more content with price.',
	// 				image: '/images/examples/pricing.jpg',
	// 			},
	// 			{
	// 				title: 'About',
	// 				href: '/about',
	// 				description:
	// 					'A simple page with a masonry gallery and little text.',
	// 				image: '/images/examples/about.jpg',
	// 			},
	// 			{
	// 				title: 'Newsletter',
	// 				href: '/newsletter',
	// 				description:
	// 					'A newsletter form using Astro DB & Simple Stack Form. Counter display!',
	// 				image: '/images/examples/newsletter.jpg',
	// 			},
	// 		],
	// 	},
	// ],
	examplesNav: [
		{
			title: 'Examples',
			items: [
				{
					title: 'Static Blog',
					href: '/astro-blog/blog',
					description:
						'A Markdown/MDX blog built using Content Collections.',
					image: myImage1,
				},
				{
					title: 'Docs',
					href: '/astro-blog/docs/getting-started',
					description:
						'A Markdown/MDX docs site built using Content Collections.',
					image: myImage2,
				},
				{
					title: 'Anime List',
					href: '/astro-blog/animes',
					description:
						'Fetch anime content from an graphql endpoint. Tabs component.',
					image: myImage1,
					launched: true,
				},
				{
					title: 'Blog DB',
					href: '/astro-blog/blog-db',
					description:
						'Blog built using Astro DB. With categories, views & likes.',
					// image: "/images/examples/blog-db.jpg",
					disabled: true,
				},
				{
					title: 'Ecommerce',
					href: '/astro-blog/products',
					disabled: true,
					description: 'Ecommerce pages fetching data from an API.',
					// image: "/images/examples/ecommerce.jpg",
				},
				{
					title: 'Authentification',
					href: '/astro-blog/auth',
					description:
						'Implement an authentification using Astro DB & Lucia',
					// image: "/images/examples/auth.jpg",
					disabled: true,
				},
			],
		},
	],
	// links: [
	// 	// {
	// 	//   title: "Example",
	// 	//   href: "/example",
	// 	//   description: "Example description",
	// 	//   image: "/images/examples/image.jpg",
	// 	// },
	// ],
};
