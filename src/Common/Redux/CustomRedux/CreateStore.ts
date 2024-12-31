interface ActionRedux {
    type: string;
    model: any;
}

export default class CreateStore {
    private readonly state: any;
    private listeners: Array<() => void> = [];
    // private listenersMap: Map<string, () => void> = new Map();

    constructor() {
        this.state = null;
    }

    getState() {
        return this.state;
    }

    dispatch(_action: ActionRedux) {
    }

    subscribe(callBackFunction: () => void): () => void {
        this.listeners.push(callBackFunction);

        return () => {
            this.listeners.filter(value => value !== callBackFunction);
        }
    }
}