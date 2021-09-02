class Person00<T, K> {
    private _name: T
    private _age: K

    constructor(name: T, age: K) {
        this._name = name
        this._age = age
    }
}

new Person00("Lim", 22)
// new Person00<string>(22)
// new Person00<string, number>("Mark", "Anna")