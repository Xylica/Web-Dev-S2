<h1>{title}</h1>
<p>{"[ Visit"} <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> {"to read the documentation ]"}</p>
<script>
    let title = $state("[ Home ]");
</script>
<p>{"[ Welcome to my Home Page ]"}</p>
<nav>
    <a href = "/">| Home |</a>
    <a href = "/about">| About |</a>
    <a href = "/content">| Content |</a>
</nav>