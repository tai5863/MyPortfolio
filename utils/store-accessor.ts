import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Todos from '../store/todos';

let todosStore: Todos;

function initializeStores(store: Store<any>): void {
    todosStore = getModule(Todos, store);
}

export { initializeStores, todosStore }