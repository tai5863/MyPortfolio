<template>
    <div id="app">
        <h1>簡単なTodoリスト</h1>
        <ul>
            <li v-for="(todo, i) in todos" :key="i">
                <input type="checkbox" :checked="todo.done" @change="todosStore.toggle(todo)" />
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
                <button @click="todosStore.remove(todo)">削除</button>
            </li>
            <li>
                <input placeholder="Todo を入力" @keyup.enter="addTodo" />
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import { Todo } from '../models/Todo';

import { todosStore } from '../store';

@Component
export default class Index extends Vue {

    get todos(): Array<Todo> {
        return todosStore.todos;
    }

    addTodo(e: any): void {
        todosStore.add(e.target.value);
        e.target.value = '';
    }

    removeTodo(todo: Todo) {
        todosStore.remove(todo);
    }

    toggleTodo(todo: Todo) {
        todosStore.toggle(todo);
    }

}
</script>

<style>
.done {
    text-decoration: line-through;
}
</style>
