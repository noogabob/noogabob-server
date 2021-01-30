import { v4 as uuidv4 } from "uuid";
import Family from "../models/family.model";

const GroupService = {
  getKey: async () => {
    const key = uuidv4();
    await Family.postKey(key);
    return key;
  },

  getMembers: async (groupId) => {
    return await Family.findByMembers(groupId);
  },

  getStatics: async (groupId, date) => {
    // 요청한 groupId를 기준으로 멤버들을 찾아서 얼마나 식사를 줫는지, 간식을 줫는지 순위 별로 리스트
    // 기준은 week와 month로 나눠서
  },

  getTimeline: async (key, groupId) => {},
};

export default GroupService;
