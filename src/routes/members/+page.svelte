<script>
	import { principalInvestigator, students, visitingStudents } from '$lib/data/lab.js';

	function groupByRole(members) {
		return members.reduce((groups, member) => {
			const role = member.role || 'Members';
			if (!groups[role]) groups[role] = [];
			groups[role].push(member);
			return groups;
		}, {});
	}

	$: studentGroups = groupByRole(students);
	$: visitingStudentGroups = groupByRole(visitingStudents);
</script>

<svelte:head>
	<title>Members - AID Lab</title>
</svelte:head>

<section class="section">
	<h2>Members</h2>

	<h3>Principal Investigator</h3>
	<a class="member-card pi-card" href={principalInvestigator.link}>
		<img src={principalInvestigator.photo} alt={principalInvestigator.name}>
		<div>
			<h4>{principalInvestigator.name}</h4>
			<p class="member-japanese-name">{principalInvestigator.nameJapanese}</p>
			<p>{principalInvestigator.position}</p>
		</div>
	</a>
</section>

<section class="section">
	<h2>Students</h2>
	{#if students.length > 0}
		{#each Object.entries(studentGroups) as [role, members]}
			<h3 class="member-group-heading">{role}</h3>
			<div class="member-grid">
				{#each members as student}
					<div class="member-card">
						{#if student.photo}
							<img src={student.photo} alt={student.name}>
						{:else}
							<div class="photo-placeholder" aria-hidden="true">
								{student.name.split(' ').map(part => part[0]).join('')}
							</div>
						{/if}
						<div>
							<h4>{student.name}</h4>
							{#if student.nameJapanese}
								<p class="member-japanese-name">{student.nameJapanese}</p>
							{/if}
							{#if student.topic}
								<p class="member-topic">{student.topic}</p>
							{/if}
							{#if student.topicJapanese}
								<p class="member-topic-japanese">{student.topicJapanese}</p>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/each}
	{:else}
		<p class="empty-note">Student members will be added soon.</p>
	{/if}
</section>

<section class="section">
	<h2>Visiting Students</h2>
	{#each Object.entries(visitingStudentGroups) as [role, members]}
		<h3 class="member-group-heading">{role}</h3>
		<div class="member-grid">
			{#each members as student}
				<div class="member-card">
					{#if student.photo}
						<img src={student.photo} alt={student.name}>
					{:else}
						<div class="photo-placeholder" aria-hidden="true">
							{student.name.split(' ').map(part => part[0]).join('')}
						</div>
					{/if}
					<div>
						<h4>{student.name}</h4>
						<p>
							<a class="affiliation-link" href={student.link} target="_blank" rel="noopener noreferrer">
								{student.affiliation}
							</a>
						</p>
					</div>
				</div>
			{/each}
		</div>
	{/each}
</section>

<style>
	.member-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		background: white;
		border: 1px solid var(--border-color);
		border-top: 4px solid var(--mint);
		padding: 1rem;
		text-decoration: none;
		text-align: center;
		color: inherit;
		transition: transform 0.25s ease, box-shadow 0.25s ease;
	}

	.member-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
	}

	.member-card img {
		width: 152px;
		height: 152px;
		border-radius: 50%;
		object-fit: cover;
		background: white;
		flex-shrink: 0;
	}

	.photo-placeholder {
		width: 152px;
		height: 152px;
		border-radius: 50%;
		background: var(--light-mint);
		color: var(--primary-blue);
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 1.9rem;
		flex-shrink: 0;
		border: 2px solid var(--mint);
	}

	.pi-card {
		max-width: 280px;
	}

	.member-group-heading {
		color: var(--teal);
		font-size: 1.28rem;
		margin: 1.15rem 0 0.65rem;
		font-weight: 700;
	}

	.member-card h4 {
		font-family: 'Libre Baskerville', serif;
		color: var(--primary-blue);
		font-size: 1.16rem;
		margin-bottom: 0.2rem;
	}

	.member-japanese-name {
		color: var(--dark-blue);
		font-weight: 600;
	}

	.member-topic {
		margin-top: 0.35rem;
		color: var(--text-color);
		font-size: 0.92rem;
		line-height: 1.35;
	}

	.member-topic-japanese {
		margin-top: 0.2rem;
		color: var(--dark-blue);
		font-size: 0.88rem;
		line-height: 1.35;
	}

	.affiliation-link {
		color: var(--dark-blue);
		text-decoration: none;
		font-weight: 600;
	}

	.affiliation-link:hover {
		color: var(--teal);
		text-decoration: underline;
	}

	.member-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(210px, 240px));
		gap: 1.2rem;
	}

	.empty-note {
		background: white;
		border-left: 4px solid var(--mint);
		padding: 1rem;
		color: var(--dark-blue);
	}

	@media (max-width: 768px) {
		.member-card {
			align-items: center;
		}

		.member-card img,
		.photo-placeholder {
			width: 126px;
			height: 126px;
		}
	}
</style>
