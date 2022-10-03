export class Product{
    private _id:number;
    private _name:string;
    private _type:string;
    private _price:number;
    private _amount:number;
    private _time:string;
    private _describe:string;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        this._time = value;
    }

    get describe(): string {
        return this._describe;
    }

    set describe(value: string) {
        this._describe = value;
    }

    constructor(id: number, name: string, type: string, price: number, amount: number, time: string, describe: string) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._amount = amount;
        this._time = time;
        this._describe = describe;
    }
}