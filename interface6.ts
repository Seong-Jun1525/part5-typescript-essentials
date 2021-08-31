interface IPerson2 {
    name: string
    age?: number
}

interface IKorean extends IPerson2 {
    city: string
}

const k: IKorean = {
    name: '임성준',
    city: '인천'
}