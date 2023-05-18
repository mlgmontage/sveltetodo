<script lang="ts">
  import { todoStore, addtodo, completetodo } from "../store/todo.model";

  let todo: string = "";

  const submit = () => {
    if (!todo.length && $todoStore.length < 10) return;
    addtodo({ text: todo, completed: false });
    todo = "";
  };

  $: if ($todoStore.length > 10) {
    alert("Too much to dos!");
  }

  let filter = "true";
  const str2bool = (str: string) => (str === "true" ? true : false);
</script>

<main>
  <div class="todo">
    <h1>To do app</h1>
    <form on:submit|preventDefault={submit}>
      <input class="todo_input" bind:value={todo} type="text" />
    </form>

    <div class="filters">
      <label>
        <input type="radio" bind:group={filter} value="true" /> completed</label
      >
      <label>
        <input type="radio" bind:group={filter} value="false" /> uncompleted</label
      >
    </div>

    {#each $todoStore as item, index}
      {#if item.completed === str2bool(filter)}
        <div class="todo_item">
          <input
            type="checkbox"
            checked={item.completed}
            on:change={() => completetodo(index)}
          />
          <div>{item.text}</div>
        </div>
      {/if}
    {/each}
  </div>
</main>

<style>
  .todo {
    width: 50rem;
    margin-inline: auto;
  }

  .todo_input {
    display: block;
    padding: 5px;
    width: 100%;
    border: 1px solid black;
    border-radius: 3px;
  }

  .todo_item {
    padding: 5px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filters {
    padding-block: 10px;
  }

  .filters label {
    cursor: pointer;
  }
</style>
