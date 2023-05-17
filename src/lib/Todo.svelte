<script lang="ts">
  type TodoT = {
    text: string;
    completed: boolean;
  };

  let todos: TodoT[] = [
    { text: "wash dishes", completed: false },
    { text: "practice english", completed: true },
    { text: "watch TV", completed: false },
  ];
  let todo: string = "";

  const submit = (ev: SubmitEvent) => {
    ev.preventDefault();
    todos.push({
      text: todo,
      completed: false,
    });
    todos = todos;
    todo = "";
  };

  const complete = (index: number) => {
    todos[index].completed = !todos[index].completed;
  };
</script>

<main>
  <div class="todo">
    <h1>To do app</h1>
    <form on:submit={submit}>
      <input class="todo_input" bind:value={todo} type="text" />
    </form>

    {#each todos as item, index}
      <div class="todo_item">
        <input
          type="checkbox"
          checked={item.completed}
          on:change={() => complete(index)}
        />
        <div>{item.text} {index}</div>
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
