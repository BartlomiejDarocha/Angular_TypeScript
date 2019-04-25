export class One {
    constructor() {
        console.log('Class one');
    }
}
export class Two {
    name: string = '';
    constructor(name = 'podaj imie') {
        this.name = name;
        console.log(this.name);
    }
}

export const pi: number = 3.14; 
export const two: number = 31231;