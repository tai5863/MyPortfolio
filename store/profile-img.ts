import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import firebase from '@/plugins/firebase';

@Module({ stateFactory: true, namespaced: true, name: 'profile-img' })
export default class ProfileImg extends VuexModule {
    name: string = 'MyProfile.jpg';
    image: string = '';

    @Mutation
    setData(image: string) {
        this.image = image;
    }

    @Action({ rawError: true })
    getImage(): Promise<any> {
        return new Promise((resolve, reject) => {
            const storage = firebase.storage();
            const storageRef = storage.ref().child(this.name);
            storageRef.getDownloadURL()
            .then(res => {
                this.setData(res);
                resolve('Got profile image.');
            })
            .catch(err => {
                console.error(err);
                reject("Couldn't get profile image.");
            });
        })
    }
}