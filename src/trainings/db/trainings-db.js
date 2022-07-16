import TrainingsModel from "./trainings-model";

export default class TrainingsDb {
    constructor() {
        this.notes = [];
    }

    createOne(data) {
        const newNote = new TrainingsModel(data)
        this.notes.push(newNote);
        return newNote;
    }

    deleteOne(id) {
        const index = this.notes.findIndex((note) => note.id = id);
        if (index >= 0) {
            this.notes.splice(index, 1);
        }
    }

    getAll() {
        return JSON.stringify(this.notes);
    }

    updateOne(id, data) {
        const element = this.notes.find((note) => note.id === id);
        if (element) {
            element.date = data.date || element.date;
            element.distance = data.distance || element.distance;
        }
    }

    exist(date) {
        return this.notes.find((note) => note.date === date);
    }

    addSamples() {
        this.notes.push(new TrainingsModel({date: Date.now(), distance: 7}));
        this.notes.push(new TrainingsModel({date: Date.now(), distance: 77}));
        this.notes.push(new TrainingsModel({date: Date.now(), distance: 777}));
    }
}
