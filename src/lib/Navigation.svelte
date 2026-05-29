<script>
	import { page } from '$app/stores';
	
	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/members', label: 'Members' },
		{ href: '/publications', label: 'Publications' },
		{ href: '/projects', label: 'Projects' }
	];

	$: currentPath = $page.url.pathname;

	function isActive(href) {
		return href === '/' ? currentPath === href : currentPath.startsWith(href);
	}
</script>

<nav class="nav">
	<div class="container">
		<ul class="nav-list">
			{#each navItems as item}
				<li>
					<a 
						href={item.href} 
						class="nav-link" 
						class:active={isActive(item.href)}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
