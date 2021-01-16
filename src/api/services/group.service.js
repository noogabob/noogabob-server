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
};

export default GroupService;
