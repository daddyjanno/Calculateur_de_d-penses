import MOCKED_DATA from '../data/data.json'

interface IProps {
    id: number
    name: string
    amount: number
}

export function createMockedData() {
    const mockedData: Array<IProps> = []

    MOCKED_DATA.forEach((item) => {
        mockedData.push(item)
    })

    return mockedData
}
