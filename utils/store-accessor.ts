import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Works from '@/store/works';
import WorkIndex from '@/store/work-index';

let worksStore: Works;
let workIndexStore: WorkIndex;

function initializeStores(store: Store<any>): void {
    worksStore = getModule(Works, store);
    workIndexStore = getModule(WorkIndex, store);
}

export { initializeStores, worksStore, workIndexStore }