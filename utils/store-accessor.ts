import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Photos from '@/store/photos';
import ProfileImg from '@/store/profile-img';
import Works from '@/store/works';
import WorkIndex from '@/store/work-index';

let profileImgStore: ProfileImg;
let photosStore: Photos;
let worksStore: Works;
let workIndexStore: WorkIndex;

function initializeStores(store: Store<any>): void {
    profileImgStore = getModule(ProfileImg, store);
    photosStore = getModule(Photos, store);
    worksStore = getModule(Works, store);
    workIndexStore = getModule(WorkIndex, store);
}

export { initializeStores, profileImgStore, photosStore, worksStore, workIndexStore }