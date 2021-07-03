import faker from 'faker';

class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        }
    }

};

const first = new User()
console.log(first.location)