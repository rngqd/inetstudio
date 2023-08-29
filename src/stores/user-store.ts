import { defineStore } from 'pinia'
import { IUserStore } from 'stores/models'
import { IUser } from 'src/models'

const API_URL = 'https://my-cite.com/api'
const MOCK_URL = './mockData.json'
export const useUserStore = defineStore('user-store', {
    state: () =>
        ({
            users: [],
            scoreOptions: [],
            cityOptions: [],
            currentScore: null,
            currentCity: null,
            isLoading: false,
            isFirstLoading: true,
        } as IUserStore),
    getters: {},
    actions: {
        filterUsers(usersArray: IUser[]) {
            if (!this.currentScore && !this.currentCity) {
                return usersArray
            } else {
                let filteredArray = [...usersArray]
                if (this.currentScore) {
                    const [sign, number] = this.currentScore.split(' ')
                    filteredArray = filteredArray.filter((user) => {
                        switch (sign) {
                            case '>':
                                return user.score > +number
                            case '<':
                                return user.score < +number
                        }
                    })
                }
                if (this.currentCity) {
                    filteredArray = filteredArray.filter((user) => {
                        return user.city === this.currentCity
                    })
                }
                return filteredArray
            }
        },
        async getData(endpoint: string): Promise<any> {
            const response = await fetch(endpoint)
            const result = await response.json()
            return result
        },
        fetchFilters() {
            this.getData(`${API_URL}/filters`)
                .then(({ data }) => {
                    this.scoreOptions = data.scores
                    this.cityOptions = data.cities
                })
                .catch(() => {
                    console.log('Ошибка при загрузке фильтров')
                    if (process.env.NODE_ENV === 'development') {
                        this.getData(MOCK_URL).then((data) => {
                            this.scoreOptions = data.filters.scores
                            this.cityOptions = data.filters.cities
                        })
                    }
                })
        },
        async fetchUsers() {
            if (this.isFirstLoading) {
                this.isFirstLoading = false
                this.isLoading = true
            }
            this.getData(
                `${API_URL}/users&city=${this.currentCity}&score=${this.currentScore}`
            )
                .then(({ data }) => {
                    this.users = data.users
                })
                .catch(() => {
                    console.log('Ошибка при загрузке пользователей')
                    if (process.env.NODE_ENV === 'development') {
                        this.getData(MOCK_URL).then((data) => {
                            this.users = this.filterUsers(data.users)
                        })
                    }
                })
                .finally(() => {
                    setTimeout(() => (this.isLoading = false), 1000)
                })
        },
    },
})
