import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import firebase from '@/plugins/firebase';

@Module({ stateFactory: true, namespaced: true, name: 'photos' })
export default class Photos extends VuexModule {
    names: Array<string> = [
        'DSC_0312.jpg',
        'DSC_0487.jpg',
        'DSC_0583.jpg',
        'DSC_0467.jpg',
        'DSC_0469.jpg',
        'DSC_0355.jpg',
        'DSC_0300.jpg',
        'DSC_0306.jpg',
        'DSC_0342.jpg',
        'DSC_0255.jpg',
        'DSC_0337.jpg',
        'DSC_0279.jpg',
        'DSC_0278.jpg',
        'DSC_0280.jpg',
        'DSC_0241.jpg',
        'DSC_0334.jpg',
        'DSC_0335.jpg',
        'DSC_0514.jpg'
    ];

    images: Array<string> = [];

    @Mutation
    setData(images: Array<string>) {
        this.images = images;
    }

    @Mutation
    addImage(image: string) {
        this.images.push(image);
    }

    @Action({ rawError: true })
    getImages(): Promise<any> {
        return new Promise((resolve, reject) => {
            const storage = firebase.storage();

            this.names.reduce((acc, cur) => acc.then(() => {
                const storageRef = storage.ref().child(cur);
                return storageRef.getDownloadURL()
                .then(res => {
                    this.addImage(res);
                });
            }), Promise.resolve())
            .then(res => {
                this.setData(this.images);
                resolve('Got photos.');
            })
            .catch(err => {
                console.error(err);
                reject("Couldn't get photos.");
            });
        });
    }
}