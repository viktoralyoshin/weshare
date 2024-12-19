import { axiosWithAuth } from "@/api/interceptors"
import { IPost } from "@/types/post.types"
import axios from "axios"

class PostService {
    private BASE_URL = "/post"
    private BASE_URL_USERVER = 'http://localhost:8080/api/posts'

    async getByUserId(id: string){
        const response = await axiosWithAuth<IPost[]>(`${this.BASE_URL}/posts/${id}`)
        return response.data
    }

    async getFeed(){
        const response = await axiosWithAuth<IPost[]>(`${this.BASE_URL}/feed`)
        return response.data
    }

    async createPost(data: {userId: string, content: string}){
        const response = await axios.post(`${this.BASE_URL_USERVER}?authorId=${data.userId}&content=${data.content}`)
        return response.data
    }
}

export const postService = new PostService()