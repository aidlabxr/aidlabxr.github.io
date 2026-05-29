<script>
	import { lab } from '$lib/data/lab.js';
	import { news } from '$lib/data/news.js';
</script>

<svelte:head>
	<title>{lab.shortName} - {lab.institution}</title>
</svelte:head>

<section class="lab-hero">
	<div class="hero-copy">
		<div class="lab-title-row">
			<img src="/logo.svg" alt="{lab.shortName} logo" class="lab-logo">
			<div class="title-block">
				<div class="title-pair">
					<h1>{lab.name}</h1>
					<p class="lab-name-jp">{lab.nameJapanese}</p>
				</div>
				<div class="institution-pair">
					<p class="lab-institution">{lab.institution} ({lab.institutionJapanese})</p>
				</div>
			</div>
		</div>
		<p class="hero-text">{lab.description}</p>
		<p class="hero-text hero-text-jp">{lab.descriptionJapanese}</p>
	</div>
</section>

<section class="section">
	<h2>Latest News</h2>
	<div class="news-scroll-container">
		{#each news as item}
			<div class="news-item">
				<span class="news-date">{item.date}</span>
				<div class="news-content">
					{@html item.content}
					{#if item.contentJapanese}
						<div class="news-content-jp">{@html item.contentJapanese}</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>

<section class="contact-panel" aria-label="Address and contact">
	<div>
		<h2>Address</h2>
		<p>{@html lab.address}</p>
	</div>
	<div>
		<h2>Contact</h2>
		<a href={`mailto:${lab.email.replace('[at]', '@')}`}>{lab.email}</a>
	</div>
</section>

<style>
	.lab-hero {
		margin: 2rem 0 2.5rem;
		padding: 2.8rem 0 2.2rem;
		border-bottom: 3px solid var(--mint);
	}

	.lab-title-row {
		display: flex;
		align-items: center;
		gap: 1.35rem;
		margin-bottom: 1.35rem;
	}

	.lab-logo {
		width: 150px;
		height: 150px;
		object-fit: contain;
		flex-shrink: 0;
	}

	.title-block {
		display: flex;
		flex-direction: column;
		gap: 0.06rem;
	}

	.title-pair,
	.institution-pair {
		display: flex;
		flex-wrap: wrap;
	}

	.title-pair {
		align-items: flex-start;
		flex-direction: column;
		gap: 0.04rem;
	}

	.institution-pair {
		align-items: baseline;
		gap: 0.65rem;
	}

	.lab-hero h1 {
		font-family: 'Libre Baskerville', serif;
		color: var(--primary-blue);
		font-size: 2.5rem;
		line-height: 1.18;
		max-width: 850px;
		margin-bottom: 0;
	}

	.lab-name-jp {
		color: var(--dark-blue);
		font-size: 1.12rem;
		font-weight: 600;
		margin-bottom: 0;
		white-space: nowrap;
	}

	.lab-institution {
		color: var(--teal);
		font-size: 0.98rem;
		font-weight: 700;
	}

	.hero-text {
		max-width: 860px;
		font-size: 1.1rem;
		line-height: 1.75;
	}

	.hero-text-jp {
		margin-top: 0.9rem;
		color: var(--dark-blue);
		font-size: 0.98rem;
		line-height: 1.7;
	}

	.news-scroll-container {
		max-height: 420px;
		overflow-y: auto;
		border: 1px solid var(--border-color);
		border-radius: 8px;
		padding: 1rem;
		background: white;
	}

	.news-item {
		display: flex;
		gap: 1rem;
		margin: 0.8rem 0;
		padding: 0.5rem 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.news-date {
		font-weight: 600;
		color: var(--dark-blue);
		min-width: 80px;
		font-size: 0.9rem;
	}

	.news-content {
		flex: 1;
		font-size: 0.95rem;
	}

	.news-content-jp {
		margin-top: 0.25rem;
		color: var(--text-color);
		font-size: 0.88rem;
		line-height: 1.55;
	}

	.news-content :global(strong) {
		font-weight: 600;
		color: var(--teal);
	}

	.news-content :global(a) {
		color: var(--dark-blue);
		text-decoration: none;
	}

	.news-content :global(a:hover) {
		color: var(--teal);
		text-decoration: underline;
	}

	.contact-panel a {
		color: var(--dark-blue);
		font-weight: 600;
	}

	.contact-panel {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin: 3rem 0 1rem;
		padding: 1.5rem;
		background: var(--light-mint);
		border-top: 4px solid var(--teal);
	}

	.contact-panel h2 {
		font-family: 'Libre Baskerville', serif;
		color: var(--primary-blue);
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
	}

	.contact-panel a {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.lab-title-row {
			align-items: flex-start;
			gap: 0.8rem;
		}

		.lab-logo {
			width: 104px;
			height: 104px;
		}

		.lab-hero h1 {
			font-size: 1.8rem;
		}

		.title-pair,
		.institution-pair {
			align-items: flex-start;
			flex-direction: column;
			gap: 0.15rem;
		}

		.lab-name-jp {
			white-space: normal;
		}

		.news-item,
		.contact-panel {
			grid-template-columns: 1fr;
			flex-direction: column;
			align-items: flex-start;
		}

		.news-date {
			min-width: auto;
		}
	}
</style>
