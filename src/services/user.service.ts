import { axiosWithAuth } from "@/api/interceptors"
import { IProfile } from "@/types/user.types"

class UserService {

    private BASE_URL = '/user'

    async getCurrentUser(){
        const response = await axiosWithAuth<IProfile>(this.BASE_URL)
        return response.data
    }

    async getUser(username: string | string[]){
        const response = await axiosWithAuth<IProfile>(`${this.BASE_URL}/${username}`)
        return response.data
    }

}

export const userService = new UserService()