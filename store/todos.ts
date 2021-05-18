import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { Todo } from '../models/Todo';

@Module({ stateFactory: true, namespaced: true, name: 'todos' })
export default class Todos extends VuexModule {
    todos: Todo[] = [];

    @Mutation
    add(text: string) {
        const todos: Todo[] = this.todos;

        const todo: Todo = {
            id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
            text,
            done: false
        };

        this.todos.push(todo);
    }

    @Mutation
    remove(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    @Mutation
    toggle(todo: Todo) {
        todo.done = !todo.done;
    }

}