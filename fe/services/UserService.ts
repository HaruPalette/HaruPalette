import { REMIND, USERS } from '../constants/api';
import { axiosInstance } from '../utils/axios';

class UserService {
  public static async getUsers() {
    const response = await axiosInstance.get(USERS);

    return response;
  }

  public static async getRemind() {
    const response = await axiosInstance.get(REMIND);

    return response;
  }
}

export default UserService;
