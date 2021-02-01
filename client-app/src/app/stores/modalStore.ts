import { observable, action } from "mobx";
import { RootStore } from "./rootStore";

export default class ModalStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
    }

    @observable.shallow modal = {
        open: false,
        body: null
    }

    @action openModal = (content: any) => {
        this.modal.body = content;
        this.modal.open = true;
    }

    @action closeModal = () => {
        this.modal.open = false;
        this.modal.body = null;
    }
}