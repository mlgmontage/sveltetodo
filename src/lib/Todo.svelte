<script lang="ts">
  import { counterStore, addtodo, completetodo } from "../store/todo.model";

  let todo: string = "";

  const submit = (ev: SubmitEvent) => {
    ev.preventDefault();
    if (!todo.length) return;
    addtodo({ text: todo, completed: false });
    todo = "";
  };
</script>

<main>
  <div class="todo">
    <h1>To do app</h1>
    <form on:submit={submit}>
      <input class="todo_input" bind:value={todo} type="text" />
    </form>

    {#each $counterStore as item, index}
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
