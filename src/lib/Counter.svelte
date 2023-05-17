<script lang="ts">
  import { counterStore, decrement, increment } from "../store/counter.model";
</script>

<main>
  <div class="counter">
    <button on:click={() => increment()} class="counter_button">+1</button>
    <h1 class={`counter_title ${$counterStore > 0 ? "hot" : "cold"}`}>
      {$counterStore}
    </h1>
    <button on:click={() => decrement()} class="counter_button">-1</button>
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
