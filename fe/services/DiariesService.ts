import { DIARIES, IMAGE, SCRIPT } from '../constants/api';
import { DiaryData } from '../types/diariesTypes';
import { axiosInstance } from '../utils/axios';

class DiariesService {
  /** 일기 상세 조회 */
  public static async getDiaries(diaryId: number) {
    const response = await axiosInstance.get(DIARIES, {
      params: { diaryId: diaryId },
    });

    return response;
  }

  /** 일기 작성 */
  public static async postDiaries(diaryData: object) {
    const response = await axiosInstance.post(DIARIES, diaryData);

    return response;
  }

  /** 일기 삭제 */
  public static async patchDiaries(diaryId: number) {
    const response = await axiosInstance.patch(DIARIES, {
      params: { diaryId: diaryId },
    });

    return response;
  }

  /** 이미지 조회 */
  public static async getImage() {
    const response = await axiosInstance.get(IMAGE);

    return response;
  }

  /** 수정 조회 */
  public static async getScript(order: number) {
    const response = await axiosInstance.get(SCRIPT, {
      params: { order: order },
    });

    return response;
  }
}

export default DiariesService;
