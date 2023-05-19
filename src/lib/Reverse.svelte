<script lang="ts">
  let input = "";
  let output = "";

  $: {
    if (isNaN(Number(input))) {
      output = "Not a number";
    }

    // with using string
    output = input.split("").reverse().join("");
  }
</script>

<main class="container">
  <textarea bind:value={input} class="input" />
  <div class="output">{output}</div>
</main>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-inline: 1rem;
    height: 300px;
  }

  .output {
    border: 1px solid black;
  }
</style>
