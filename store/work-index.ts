import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module({ stateFactory: true, namespaced: true, name: 'work-index' })
export default class WorkIndex extends VuexModule {
    index: number = 0;

    @Mutation
    setIndex(index: number) {
        this.index = index;
    }
}