import { axiosWithAuth } from "@/api/interceptors";
import { IFollower } from "@/types/follower.types";

class FollowerService {
  private BASE_URL = "/follower";

  async getFollows() {
    const response = await axiosWithAuth<IFollower[]>(this.BASE_URL);
    return response.data;
  }

  async follow(id: string) {
    const response = await axiosWithAuth.post<IFollower>(this.BASE_URL, {
      followerId: id,
    });
    return response.data;
  }

  async unFollow(id: string) {
    const response = await axiosWithAuth.post<IFollower>(
      `${this.BASE_URL}/unfollow`,
      { followerId: id }
    );
    return response.data;
  }
}

export const followerService = new FollowerService();
