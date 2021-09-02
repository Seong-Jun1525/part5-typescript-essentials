// abstract를 사용한 경우에는 class 앞에 abstract를 작성하여야 한다.
abstract class AbstractPerson { 
    protected _name: string = 'Mark'

    abstract setName(name: string): void // abstract 키워드를 사용했기 때문에 구현을 하지 않는다.
}

class Person12 extends AbstractPerson {
    setName(name: string): void {
        this._name = name
    }

}

const p = new Person12()
p.setName()