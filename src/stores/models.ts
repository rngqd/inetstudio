import { IUser } from 'src/models'

export interface IUserStore {
    users: IUser[]
    scoreOptions: number[]
    cityOptions: string[]
    currentScore: string | null
    currentCity: string | null
    isLoading: boolean
    isFirstLoading: boolean
}
