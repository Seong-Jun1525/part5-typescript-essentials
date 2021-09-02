class PersonExtends<T extends string | number> { // T는 string과 number만 가능
    private _name: T

    constructor(name: T) {
        this._name = name
    }
}

new PersonExtends("Lim")
new PersonExtends(22)
// new PersonExtends(true) error

// type은 항상 가장 작은 범위로 제한을 해주는게 컴파일 타임에 무언가를 체크할 때 훨씬 좋다
// generic을 사용할 때 extends를 사용하여 제한을 해주는게 좋다.
