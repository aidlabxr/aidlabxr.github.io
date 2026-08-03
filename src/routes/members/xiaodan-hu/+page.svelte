<script>
	import { profile } from '$lib/data/profile.js';
	import { academicService } from '$lib/data/service.js';
</script>

<svelte:head>
	<title>Xiaodan Hu - AID Lab</title>
</svelte:head>

<!-- Compact Profile Section -->
<section class="profile-compact">
	<img src={profile.photo} alt={profile.name} class="profile-photo">
	<div class="profile-info-section">
		<div class="profile-text">
			<h1>{profile.name}</h1>
			<p class="subtitle">中：{profile.nameChinese} | 日：{profile.nameJapanese}</p>
			<p class="position">{profile.position}</p>
			<p class="position-japanese">{profile.positionJapanese}</p>
		</div>
	</div>
	<div class="contact-compact">
		<div class="contact-item">
			<i class="fas fa-map-marker-alt"></i>
			<span>{profile.location}</span>
		</div>
		<div class="contact-item">
			<i class="fas fa-envelope"></i>
			<a href={`mailto:${profile.email.replace('[at]', '@')}`} class="contact-link">Email</a>
		</div>
		<div class="contact-item">
			<i class="ai ai-google-scholar"></i>
			<a href={profile.scholar} target="_blank" class="contact-link">Google Scholar</a>
		</div>
	</div>
</section>

<!-- Introduction Section -->
<section class="section">
	<p>{@html profile.introduction.english}</p>
    <p>{@html profile.introduction.research}</p>
	<div style="margin-top: 1.5rem; padding: 1rem; background: #f8fffe; border-radius: 8px; border-left: 3px solid var(--mint);">
		<!-- <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem;">日本語</h4> -->
		<p>{@html profile.introduction.japanese}</p>
	</div>

	<div style="margin-top: 1rem; padding: 1rem; background: var(--light-mint); border-radius: 8px; border-left: 3px solid var(--teal);">
		<!-- <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem;">中文</h4> -->
		<p>{@html profile.introduction.chinese}</p>
	</div>
</section>

<!-- Teaching Section -->
<section class="section">
	<h2>Teaching / 教育</h2>
	<div class="teaching-item">
		<span class="teaching-year">2026</span>
		<div class="teaching-content">
			<strong>未来を創る１</strong>, Shibaura Institute of Technology
		</div>
	</div>
	<div class="teaching-item">
		<span class="teaching-year">2026</span>
		<div class="teaching-content">
			<strong>テクニカルセミナー1</strong>, Shibaura Institute of Technology
		</div>
	</div>
	<div class="teaching-item">
		<span class="teaching-year">2026</span>
		<div class="teaching-content">
			<strong>Recent Trends on Information Systems</strong>, Shibaura Institute of Technology
		</div>
	</div>
	<div class="teaching-item">
		<span class="teaching-year">2024</span>
		<div class="teaching-content">
			<strong>Augmented Reality</strong>, TU Graz
		</div>
	</div>
</section>

<!-- Academic Service Section -->
<section class="section">
	<h2>Academic Service / 学会活動</h2>
	
	<h3 class="service-subsection">Organizing Committee / 運営委員</h3>
	<div class="service-list">
		{#each academicService.organizingCommittee as item}
			<div class="service-item">
				<span class="service-year service-role">{item.role}</span>
				<div class="service-content">
					{#if item.url}
						<a href={item.url}>{item.conference}</a>
					{:else}
						{item.conference}
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<h3 class="service-subsection">Reviewer / 査読</h3>
	<div class="service-list">
		<div class="service-item">
			<span class="service-year">Journals / 論文誌</span>
			<div class="service-content">
				{academicService.reviewer.journals.join(', ')}
			</div>
		</div>
		<div class="service-item">
			<span class="service-year">Conferences / 国際会議</span>
			<div class="service-content">
				{academicService.reviewer.conferences.join(', ')}
			</div>
		</div>
	</div>
</section>

<!-- Grants Section -->
<section class="section">
	<h2>Fellowships & Grants / フェローシップ・研究費</h2>
	<div class="grant-item">
		<span class="grant-date">2026.08-2028.03</span>
		<div class="grant-content">
			<div><strong>Principal Investigator</strong> / <strong>研究代表者</strong></div>
			<div>
				<strong>JSPS KAKENHI Grant-in-Aid for Research Activity Start-up</strong> /
				<strong>JSPS 科研費 研究活動スタート支援</strong>
			</div>
			<div>
				Project: Establishment of a Surgical Visual Assistance Platform Based on Occlusion-Capable Optical See-Through Head-Mounted Displays
				<br>
				課題名：遮蔽対応光学式シースルー型ヘッドマウントディスプレイによる手術視覚支援基盤の構築
			</div>
		</div>
	</div>
	<div class="grant-item">
		<span class="grant-date">2021.10-2024.03</span>
		<div class="grant-content">
			<div><strong>Principal Investigator</strong> / <strong>研究代表者</strong></div>
			<div>
				<strong><a href="https://www.jst.go.jp/jisedai/spring/en/index.html">JST Support for Pioneering Research Initiated by the Next Generation Program</a></strong> /
				<strong><a href="https://www.jst.go.jp/jisedai/spring/index.html">次世代研究者挑戦的研究プログラム</a></strong>
			</div>
			<div>Selected as one fellow per academic year.</div>
		</div>
	</div>
</section>

<!-- Awards & Honors Section -->
<section class="section">
	<h2>Awards & Honors / 受賞・栄誉</h2>
	<div class="award-item">
		<span class="award-date">2021.01</span>
		<div class="award-content">
			<strong><a href="https://www.otsukafoundation.org/english/">Otsuka Toshimi Scholarship</a></strong> /
			<strong><a href="https://www.otsukafoundation.org/index.html">大塚敏美育英奨学金</a></strong>
		</div>
	</div>
</section>

<!-- Patents Section -->
<section class="section">
	<h2>Patents / 特許</h2>

	<h3 class="service-subsection">Japanese Patent Applications (Published) / 国内公開特許公報</h3>
	<div class="patent-item">
		<span class="patent-date">2022.10.07</span>
		<div class="patent-content">
			<strong>調光装置</strong>, 特開2022-151109, 特願2021-054025, 胡瀟丹，磯山直也，酒田信親，清川清.
		</div>
	</div>

	<h3 class="service-subsection">US Patent Applications / 米国出願特許</h3>
	<div class="patent-item">
		<span class="patent-date">2025.04.10</span>
		<div class="patent-content">
			<strong>Near-Eye Display Using Pinhole Aperture Array</strong>, U.S. Patent Application 19/175,389, Xiaodan Hu, Alexander Plopski.
		</div>
	</div>
</section>

<!-- Invited Talks Section -->
<section class="section">
	<h2>Invited Talks / 招待講演</h2>
	<div class="talk-item">
		<span class="talk-date">2025.06.26</span>
		<div class="talk-content">
			<strong>GAMES Webinar 2025</strong>, “Toward Occlusion-Capable Optical See-Through Head-Mounted Displays: Display Design and Perceptual Challenges,” Online.
		</div>
	</div>
	<div class="talk-item">
		<span class="talk-date">2025.03.11</span>
		<div class="talk-content">
			<strong><a href="https://ieeevr.org/2025/">IEEE VR 2025</a> TVCG Invited Talk</strong>, “Perception-Driven Soft-Edge Occlusion for Optical See-Through Head-Mounted Displays,” Saint-Malo, France.
		</div>
	</div>
</section>

<style>
	/* Compact Profile */
	.profile-compact {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin: 2rem 0;
		padding: 1rem;
	}

	.profile-photo {
		width: 210px;
		height: 210px;
		border-radius: 50%;
		object-fit: contain;
		object-position: center center;
		background: white;
		flex-shrink: 0;
	}

	.profile-info-section {
		flex: 1;
	}

	.profile-text h1 {
		font-family: 'Libre Baskerville', serif;
		font-size: 1.5rem;
		color: var(--primary-blue);
		margin-bottom: 0.3rem;
	}

	.subtitle {
		font-size: 0.9rem;
		color: var(--dark-blue);
		margin-bottom: 0.2rem;
	}

	.position {
		font-size: 0.95rem;
		color: var(--teal);
		font-weight: 600;
		margin-bottom: 0.15rem;
	}

	.position-japanese {
		font-size: 0.88rem;
		color: var(--dark-blue);
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.contact-compact {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.contact-compact .contact-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.85rem;
		color: var(--dark-blue);
		background: none;
		border: none;
		padding: 0;
	}

	.contact-compact .contact-item i {
		width: 16px;
		text-align: center;
		font-size: 0.9rem;
	}

	.contact-link {
		color: var(--dark-blue);
		text-decoration: none;
		font-size: 0.85rem;
	}

	.contact-link:hover {
		color: var(--primary-blue);
        text-decoration: underline;
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

	.award-item {
		display: flex;
		gap: 1rem;
		margin: 0.8rem 0;
		padding: 0.8rem 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.award-date {
		font-weight: 600;
		color: var(--dark-blue);
		min-width: 100px;
		font-size: 0.9rem;
	}

	.award-content :global(strong) {
		color: var(--teal);
		font-weight: 600;
	}

	.patent-item {
		display: flex;
		gap: 1rem;
		margin: 0.8rem 0;
		padding: 0.8rem 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.patent-date {
		font-weight: 600;
		color: var(--dark-blue);
		min-width: 100px;
		font-size: 0.9rem;
	}

	.patent-content {
		flex: 1;
		font-size: 0.95rem;
	}

	.patent-content :global(strong) {
		color: var(--teal);
		font-weight: 600;
	}

	.teaching-item {
		display: flex;
		gap: 1rem;
		margin: 0.6rem 0;
		padding: 0.6rem 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.teaching-year {
		font-weight: 600;
		color: var(--dark-blue);
		min-width: 100px;
		font-size: 0.9rem;
	}

	.teaching-content {
		flex: 1;
		font-size: 0.95rem;
	}

	.teaching-content :global(strong) {
		color: var(--teal);
		font-weight: 600;
	}

	.talk-item {
		display: flex;
		gap: 1rem;
		margin: 0.8rem 0;
		padding: 0.8rem 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.talk-date {
		font-weight: 600;
		color: var(--dark-blue);
		min-width: 100px;
		font-size: 0.9rem;
	}

	.talk-content :global(strong) {
		color: var(--teal);
		font-weight: 600;
	}

	.grant-item {
		display: flex;
		gap: 1rem;
		margin: 0.8rem 0;
		padding: 0.8rem 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.grant-date {
		font-weight: 600;
		color: var(--dark-blue);
		min-width: 140px;
		font-size: 0.9rem;
	}

	.grant-content :global(strong) {
		color: var(--teal);
		font-weight: 600;
	}

	.grant-content div + div {
		margin-top: 0.3rem;
	}

	/* Academic Service Section */
	.service-subsection {
		font-size: 1.1rem;
		color: var(--primary-blue);
		margin-top: 1.5rem;
		margin-bottom: 0.8rem;
		font-weight: 600;
	}

	.service-subsection:first-of-type {
		margin-top: 0.5rem;
	}

	.service-list {
		margin-bottom: 1rem;
	}

	.service-item {
		display: flex;
		gap: 1rem;
		margin: 0.6rem 0;
		padding: 0.6rem 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.service-year {
		font-weight: 600;
		color: var(--dark-blue);
		min-width: 100px;
		font-size: 0.9rem;
	}

	.service-content {
		flex: 1;
		font-size: 0.95rem;
	}

	.service-role {
		min-width: 220px;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.teaching-item,
		.service-item,
		.patent-item,
		.talk-item,
		.grant-item {
			flex-direction: column;
			gap: 0.25rem;
		}

		.service-role {
			min-width: 0;
		}

		.profile-compact {
			flex-direction: column;
			text-align: center;
			gap: 1rem;
		}

		.profile-photo {
			width: 100px;
			height: 100px;
			object-fit: contain;
		}

		.profile-text h1 {
			font-size: 1.3rem;
		}

		.contact-compact {
			margin-top: 0.5rem;
		}

	}
</style>
