import faker from 'faker';

export class User {
    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        }
    }

    name: string;
    location: {
        lat: number;
        lng: number;
    };
};