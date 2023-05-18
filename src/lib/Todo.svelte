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
</script>

<main>
  <div class="todo">
    <h1>To do app</h1>
    <form on:submit|preventDefault={submit}>
      <input class="todo_input" bind:value={todo} type="text" />
    </form>

    {#each $todoStore as item, index}
      <div class="todo_item">
        <input
          type="checkbox"
          checked={item.completed}
          on:change={() => completetodo(index)}
        />
        <div>{item.text}</div>
      </div>
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
</style>
