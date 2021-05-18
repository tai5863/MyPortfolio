import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import firebase from '@/plugins/firebase';
import { Work } from '@/models/Work';

@Module({ stateFactory: true, namespaced: true, name: 'works' })
export default class Works extends VuexModule {
    works: Array<Work> = [];
    names: Array<string> = [];

    @Mutation
    addWork(work: Work) {
        this.works.push(work);
    }

    @Mutation
    addName(name: string) {
        this.names.push(name);
    }

    @Action({ rawError: true })
    getWorks(): Promise<any> {
        return new Promise((resolve, reject) => {
            const database = firebase.database();
            const databaseRef = database.ref('works');
            databaseRef.once('value')
            .then(res => {
                let works = res.val();
                if (works) {
                    Object.keys(works).map((workName) => {
                        let work = works[workName];
                        let messages: Array<string> = [];
                        let images: Array<string> = [];
                        Object.keys(work).map((key) => {
                            if (key.toString().includes('message')) {
                                messages.push(work[key]);
                                delete work[key];
                            } else if (key.toString().includes('image')) {
                                images.push(work[key]);
                                this.addName(work[key]);
                                delete work[key];
                            }
                        });
                        work.messages = messages;
                        work.images = images;

                        this.getImages(work);

                        console.log(this.works);
                    });
                    resolve('Got works.');
                }
            })
            .catch(err => {
                console.error(err);
                reject("Couldn't get works.");
            });
        })
    }

    @Action({ rawError: true })
    getImages(work: Work): Promise<any> {
        return new Promise((resolve, reject) => {
            const storage = firebase.storage();

            work.images.reduce((acc, cur, index) => acc.then(() => {
                const storageRef = storage.ref().child(cur);
                return storageRef.getDownloadURL()
                .then(res => {
                    work.images[index] = res;
                })
                .catch(err => {
                    console.error(err);
                });
            }), Promise.resolve())
            .then(res => {
                this.addWork(work);
                resolve('Got image.');
            })
            .catch(err => {
                console.error(err);
                reject("Couldn't get image.");
            });
        });
    }
}