<script lang="ts">
	import { publications } from '$lib/data/research.js';
	
	// Group publications by year
	const publicationsByYear = publications.reduce((acc, pub) => {
		if (!acc[pub.year]) {
			acc[pub.year] = [];
		}
		acc[pub.year].push(pub);
		return acc;
	}, {} as Record<number, typeof publications>);
	
	const sortedYears = Object.keys(publicationsByYear).sort((a, b) => Number(b) - Number(a));

	function getPaperType(pub) {
		if (pub.paperType) return pub.paperType;

		const text = `${pub.venue ?? ''} ${pub.venueFull ?? ''}`.toLowerCase();
		const venueText = `${pub.venue ?? ''}`.toLowerCase();

		if (
			venueText.includes('transactions') ||
			venueText.includes('tvcg') ||
			venueText.includes('optics express') ||
			venueText.includes('optics letters') ||
			venueText.includes('displays') ||
			venueText.includes('journal')
		) {
			return 'Journal Paper';
		}

		if (text.includes('demo')) return 'Conference Demo';
		if (text.includes('workshop')) return 'Workshop Paper';
		if (text.includes('poster')) return 'Poster Paper';
		if (
			text.includes('proceedings') ||
			text.includes('conference') ||
			text.includes('symposium') ||
			text.includes('ismar') ||
			text.includes('ieee vr') ||
			text.includes('avi')
		) {
			return 'Conference Paper';
		}

		return 'Journal Paper';
	}

	function paperTypeClass(pub) {
		return getPaperType(pub).toLowerCase().replace(/\s+/g, '-');
	}

	function cleanVenue(venue) {
		return venue;
	}
</script>

<svelte:head>
	<title>Publications - Xiaodan Hu</title>
</svelte:head>

<div class="google-scholar-note">
	<p>For a complete list of publications, please refer to my <a href="https://scholar.google.com/citations?user=wxlZ_j8AAAAJ" target="_blank" rel="noopener noreferrer" class="scholar-link">Google Scholar</a> profile.</p>
</div>

<div class="publication-list">
		{#each sortedYears as year}
			<h3 class="year-header">{year}</h3>
			
			{#each publicationsByYear[Number(year)] as pub}
			<div class="pub-item">
				<div class="pub-authors">{@html pub.authors.map(author => author.name).join(', ').replace(/Xiaodan Hu/g, '<strong>Xiaodan Hu</strong>')}</div>
				<div class="pub-title">{pub.title}</div>
				<div class="pub-venue">
					<div class="venue-with-type">
						<span class={`paper-type ${paperTypeClass(pub)}`}>{getPaperType(pub)}</span>
						<span class="venue-name">{@html cleanVenue(pub.venueFull)}
							 {#if pub.status?.toLowerCase().includes('to appear')}
							 {@html pub.status}
							 {/if}
							</span>
					</div>
					<div class="pub-links-inline">
						{#each Object.entries(pub.links ?? {}) as [type, url]}
							{#if type === 'conference'}
								<a href={url} class="pub-link-inline" target="_blank" rel="noopener noreferrer">
									Conference <i class="fas fa-external-link-alt"></i>
								</a>
							{:else if type === 'journal'}
								<a href={url} class="pub-link-inline" target="_blank" rel="noopener noreferrer">
									Journal <i class="fas fa-book"></i>
								</a>
							{:else if type === 'ieee'}
								<a href={url} class="pub-link-inline" target="_blank" rel="noopener noreferrer">
									IEEE Xplore <i class="fas fa-external-link-alt"></i>
								</a>
							{:else if type === 'preprint'}
								<a href={url} class="pub-link-inline" target="_blank" rel="noopener noreferrer">
									Preprint <i class="fas fa-file-pdf"></i>
								</a>
							{:else if type === 'slides'}
								<a href={url} class="pub-link-inline" target="_blank" rel="noopener noreferrer">
									Slides <i class="fas fa-file-powerpoint"></i>
								</a>
							{:else if type === 'video'}
								<a href={url} class="pub-link-inline" target="_blank" rel="noopener noreferrer">
									Video <i class="fas fa-play"></i>
								</a>
							{:else if type === 'arxiv'}
								<a href={url} class="pub-link-inline" target="_blank" rel="noopener noreferrer">
									arXiv <i class="fas fa-file-pdf"></i>
								</a>
							{:else if type === 'project'}
								<a href={url} class="pub-link-inline" target="_blank" rel="noopener noreferrer">
									Project <i class="fas fa-project-diagram"></i>
								</a>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		{/each}
	{/each}
</div>

<style>
	.publication-list {
		margin: 0;
	}

	.google-scholar-note {
		background: var(--light-mint);
		padding: 0.7rem 1rem;
		border-radius: 8px;
		margin-bottom: 1.2rem;
		border-left: 4px solid var(--teal);
	}

	.google-scholar-note p {
		margin: 0;
		font-size: 0.92rem;
		color: var(--text-color);
		line-height: 1.35;
	}

	.scholar-link {
		color: var(--primary-blue);
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.scholar-link:hover {
		color: var(--teal);
		text-decoration: underline;
	}

	.pub-item {
		margin: 0.15rem 0;
		padding: 0.35rem 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.pub-item:last-child {
		border-bottom: none;
	}

	.pub-authors {
		color: var(--dark-blue);
		margin-bottom: 0.15rem;
		font-size: 0.96rem;
		line-height: 1.32;
	}

	.pub-authors :global(strong) {
		color: var(--primary-blue);
		font-weight: 700;
	}

	.pub-title {
		color: var(--text-color);
		font-weight: 600;
		margin-bottom: 0.15rem;
		font-size: 1.04rem;
		line-height: 1.32;
	}

	.venue-with-type {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		min-width: 0;
		flex: 1;
	}

	.paper-type {
		border-radius: 999px;
		color: var(--dark-blue);
		background: #eef7f6;
		border: 1px solid #d6ece8;
		font-size: 0.74rem;
		font-weight: 700;
		line-height: 1;
		padding: 0.26rem 0.48rem;
		white-space: nowrap;
	}

	.paper-type.journal-paper {
		color: white;
		background: var(--teal);
		border-color: var(--teal);
	}

	.paper-type.conference-paper {
		color: var(--dark-blue);
		background: #eef7f6;
		border-color: #d6ece8;
	}

	.paper-type.poster-paper,
	.paper-type.workshop-paper,
	.paper-type.conference-demo {
		color: var(--primary-blue);
		background: var(--light-mint);
		border-color: var(--mint);
	}

	:global(.pub-title a) {
		color: var(--text-color);
		text-decoration: none;
	}

	:global(.pub-title a:hover) {
		color: var(--dark-blue);
	}

	.pub-venue {
		color: var(--teal);
		margin-bottom: 0.1rem;
		font-size: 0.9rem;
		line-height: 1.3;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
	}

	.venue-name {
		flex: 1;
		min-width: 0;
	}

	.pub-links-inline {
		display: flex;
		gap: 0.35rem;
		flex-wrap: wrap;
	}

	.pub-link-inline {
		color: var(--dark-blue);
		text-decoration: none;
		font-size: 0.86rem;
		transition: all 0.3s ease;
		margin-left: 0.25rem;
		white-space: nowrap;
	}

	.pub-link-inline:hover {
		color: var(--primary-blue);
	}

	.pub-link-inline i {
		margin-right: 0.2rem;
	}

	.pub-venue :global(strong) {
		color: var(--primary-blue);
		font-weight: 700;
		font-style: normal;
	}
	
	/* 让venue名称加粗，但不包括"Proceedings of the" */
	.venue-name {
		font-weight: 500;
		font-style: italic;
	}


	/* 内容区域链接样式 - 只针对链接本身 */
	:global(.section a) {
		color: var(--dark-blue) !important;
		text-decoration: none !important;
		/* text-decoration-color: var(--mint) !important; */
		transition: all 0.3s ease;
	}

	:global(.section a:hover) {
		color: var(--teal) !important;
		text-decoration-color: var(--teal) !important;
	}

	.year-header {
		font-family: 'Libre Baskerville', serif;
		color: var(--primary-blue);
		font-size: 1.15rem;
		margin: 1.25rem 0 0.55rem 0;
		padding: 0.3rem 0;
		border-bottom: 2px solid var(--mint);
		font-weight: 700;
	}

	@media (max-width: 768px) {
		.pub-venue {
			align-items: flex-start;
			flex-direction: column;
			gap: 0.25rem;
		}

		.venue-with-type {
			align-items: flex-start;
			flex-direction: column;
			gap: 0.25rem;
		}

		.pub-link-inline {
			margin-left: 0;
		}
	}
</style>
