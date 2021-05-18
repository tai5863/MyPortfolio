import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Photos from '@/store/photos';
import ProfileImg from '@/store/profile-img';
import Works from '@/store/works';

let profileImgStore: ProfileImg;
let photosStore: Photos;
let worksStore: Works;

function initializeStores(store: Store<any>): void {
    profileImgStore = getModule(ProfileImg, store);
    photosStore = getModule(Photos, store);
    worksStore = getModule(Works, store);
}

export { initializeStores, profileImgStore, photosStore, worksStore }