// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightClientMermaid from '@pasqal-io/starlight-client-mermaid';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';
import starlightBlog from 'starlight-blog';

export default defineConfig({
	site: 'https://javajack.github.io',
	base: '/spear-gtm',
	integrations: [
		starlight({
			title: 'Spear — AI Pipeline Engine',
			description: 'AI outbound agent that generates qualified pipeline for B2B SaaS founders — measured on meetings booked, not emails sent.',
			plugins: [
				starlightClientMermaid(),
				starlightImageZoom(),
				starlightLinksValidator({
					errorOnRelativeLinks: false,
				}),
				starlightBlog({
					title: 'Blog',
					authors: {
						rakesh: {
							name: 'Rakesh Waghela',
							title: 'Founder, Spear',
							url: 'https://topmate.io/rakeshwaghela',
							picture: 'https://github.com/javajack.png',
						},
					},
				}),
			],
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				Footer: './src/components/Footer.astro',
			},
			head: [
				// Google Consent Mode v2 - MUST load BEFORE gtag.js (synchronous)
				{
					tag: 'script',
					content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}

						function isGDPRRegion() {
							const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
							const euTimezones = ['Europe/', 'Atlantic/Reykjavik', 'Atlantic/Azores', 'Atlantic/Madeira'];
							return euTimezones.some(zone => tz.startsWith(zone));
						}

						const isGDPR = isGDPRRegion();

						gtag('consent', 'default', {
							'ad_storage': 'denied',
							'ad_user_data': 'denied',
							'ad_personalization': 'denied',
							'analytics_storage': isGDPR ? 'denied' : 'granted',
							'functionality_storage': 'granted',
							'personalization_storage': 'denied',
							'security_storage': 'granted',
							'wait_for_update': 500,
						});

						window.__isGDPRRegion = isGDPR;
					`,
				},
				// Google Analytics 4
				{
					tag: 'script',
					attrs: { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-G986QLPFZ1' },
				},
				{
					tag: 'script',
					content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-G986QLPFZ1', {
							'anonymize_ip': true,
							'cookie_flags': 'SameSite=None;Secure'
						});
					`,
				},
				// Yandex Webmaster verification
				{ tag: 'meta', attrs: { name: 'yandex-verification', content: '5281e40eca9463d2' } },
				// Open Graph image
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://javajack.github.io/spear-gtm/og-image.svg' } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { property: 'og:image:type', content: 'image/svg+xml' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: 'https://javajack.github.io/spear-gtm/og-image.svg' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
				{ tag: 'meta', attrs: { name: 'twitter:site', content: '@webiyo' } },
				// SEO meta tags
				{
					tag: 'meta',
					attrs: {
						name: 'keywords',
						content: 'AI SDR, outbound automation, B2B SaaS, pipeline generation, AI sales agent, cold email automation, meeting booking, sales development representative, AI outbound',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'author',
						content: 'Rakesh Waghela',
					},
				},
				// LLM optimization meta tags
				{ tag: 'meta', attrs: { name: 'ai-indexable', content: 'true' } },
				{ tag: 'meta', attrs: { name: 'ai-purpose', content: 'B2B SaaS outbound pipeline automation product strategy and documentation' } },
				{ tag: 'meta', attrs: { name: 'ai-audience', content: 'B2B SaaS founders, technical founders, investors, GTM strategists' } },
				// Cloudflare Web Analytics
				{ tag: 'script', attrs: { defer: true, src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "7ce325bb227e4b42a8406f369ff4e788"}' } },
				// Cookie Consent Banner
				{ tag: 'script', attrs: { defer: true, src: '/spear-gtm/cookie-consent.js' } },
				// Structured Data (JSON-LD)
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@graph': [
							{
								'@type': 'SoftwareApplication',
								name: 'Spear',
								url: 'https://javajack.github.io/spear-gtm/',
								applicationCategory: 'BusinessApplication',
								description: 'AI outbound agent that generates qualified pipeline for B2B SaaS founders — measured on meetings booked, not emails sent.',
								operatingSystem: 'Web',
								offers: {
									'@type': 'AggregateOffer',
									lowPrice: '199',
									highPrice: '799',
									priceCurrency: 'USD',
								},
								author: { '@id': '#rakesh' },
							},
							{
								'@type': 'Product',
								name: 'Spear — AI Pipeline Engine',
								description: 'AI-native outbound pipeline engine for B2B SaaS founders. Automates prospect research, email personalization, and reply management.',
								brand: { '@type': 'Brand', name: 'Spear' },
								category: 'Sales Automation Software',
							},
							{
								'@type': 'Person',
								'@id': '#rakesh',
								name: 'Rakesh Waghela',
								url: 'https://www.linkedin.com/in/rakeshwaghela',
								sameAs: [
									'https://x.com/webiyo',
									'https://www.linkedin.com/in/rakeshwaghela',
									'https://topmate.io/rakeshwaghela',
								],
							},
						],
					}),
				},
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/javajack' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/webiyo' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/rakeshwaghela' },
				{ icon: 'external', label: 'Book a Consultation', href: 'https://topmate.io/rakeshwaghela' },
			],
			sidebar: [
				{
					label: 'Home',
					items: [
						{ label: 'Spear — Overview', slug: 'index' },
					],
				},
				{
					label: 'Vision & Problem',
					items: [
						{ label: 'The Problem', slug: 'vision/problem' },
						{ label: 'Why Now', slug: 'vision/why-now' },
						{ label: 'Market Landscape', slug: 'vision/market-landscape' },
					],
				},
				{
					label: 'Validation',
					items: [
						{ label: 'Discounted Ideas', slug: 'validation/discounted-ideas' },
						{ label: 'Why Spear Wins', slug: 'validation/why-spear' },
					],
				},
				{
					label: 'Product',
					items: [
						{ label: 'Overview', slug: 'product/overview' },
						{ label: 'Target Persona', slug: 'product/target-persona' },
						{ label: 'Core Features', slug: 'product/core-features' },
						{ label: 'Magic Moment', slug: 'product/magic-moment' },
						{ label: 'Exclusions', slug: 'product/exclusions' },
					],
				},
				{
					label: 'Architecture',
					items: [
						{ label: 'Technical Stack', slug: 'architecture/technical-stack' },
						{ label: 'System Design', slug: 'architecture/system-design' },
						{ label: 'AI Engine', slug: 'architecture/ai-engine' },
					],
				},
				{
					label: 'Moat & Defensibility',
					items: [
						{ label: 'Defensibility', slug: 'moat/defensibility' },
						{ label: 'Compounding Intelligence', slug: 'moat/compounding-intelligence' },
						{ label: 'Incumbent Response', slug: 'moat/incumbent-response' },
					],
				},
				{
					label: 'Business Model',
					items: [
						{ label: 'Pricing', slug: 'business/pricing' },
						{ label: 'Unit Economics', slug: 'business/unit-economics' },
						{ label: 'Revenue Projections', slug: 'business/revenue-projections' },
					],
				},
				{
					label: 'Go-to-Market',
					items: [
						{ label: 'First 10 Customers', slug: 'go-to-market/first-10-customers' },
						{ label: 'Scaling to 100', slug: 'go-to-market/scaling-to-100' },
						{ label: 'Distribution Strategy', slug: 'go-to-market/distribution-strategy' },
					],
				},
				{
					label: 'Expansion',
					items: [
						{ label: 'Product Roadmap', slug: 'expansion/roadmap' },
						{ label: 'Bowling Pin Strategy', slug: 'expansion/bowling-pins' },
						{ label: 'HubSpot Collision', slug: 'expansion/hubspot-collision' },
					],
				},
				{
					label: 'Risks',
					items: [
						{ label: 'Risk Overview', slug: 'risks/overview' },
						{ label: 'Mitigations', slug: 'risks/mitigations' },
					],
				},
				{
					label: 'Execution',
					items: [
						{ label: '90-Day Plan', slug: 'execution/90-day-plan' },
						{ label: 'Milestones', slug: 'execution/milestones' },
						{ label: 'Day One Setup', slug: 'execution/day-one-setup' },
					],
				},
			],
		}),
	],
});
