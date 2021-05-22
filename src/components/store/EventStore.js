import { observable, action, computed, makeObservale } from "mobx";

class EventsStore {
    events = [];

    constructor() {
        makeObservale(this);
    }

    setEvents(events) {
        this.events = events;
    }

    setEvent(event) {
        this.events.push(event);
    }
    get eventLenght() {
        return this.events.lenght;
    }

    get getEvents() {
        return this.events.length;
    }
}

const eventsStore = new EventsStore();

export default eventsStore;