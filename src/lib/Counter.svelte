<script lang="ts">
  let count: number = 1;

  const inc = () => {
    count += 1;
  };

  const dec = () => {
    count -= 1;
  };
</script>

<main>
  <div class="counter">
    <button on:click={inc} class="counter_button">+1</button>
    <h1 class={`counter_title ${count > 0 ? "hot" : "cold"}`}>{count}</h1>
    <button on:click={dec} class="counter_button">-1</button>
  </div>
</main>

<style>
  .counter {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .counter_button {
    background-color: transparent;
    border: 2px solid black;
    border-radius: 3px;
    padding: 5px;
  }

  .counter_title {
    font-size: 4rem;
  }

  .hot {
    color: red;
  }

  .cold {
    color: blue;
  }
</style>
