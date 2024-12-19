import { axiosWithAuth } from "@/api/interceptors";
import { ILike } from "@/types/post.types";

class LikeService {
  private BASE_URL = "/like";

  async createLike(postId: string) {
    const response = await axiosWithAuth.post<ILike>(
      `${this.BASE_URL}/create/${postId}`
    );
    return response.data;
  }

  async deleteLike(postId: string) {
    const response = await axiosWithAuth.post<ILike>(
      `${this.BASE_URL}/delete/${postId}`
    );
    return response.data;
  }
}

export const likeService = new LikeService();
