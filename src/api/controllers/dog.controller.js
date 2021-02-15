//그리고 사용자 등록할 때 사용자 pk 보내주는것도 만들어놔서 어떻게 돌아가는지 확인하면될거야 유효성검사하다가 거기까지건들여버려서 ..ㅋ
//해미야 유저 생성항때 pk값도 응닺으로줘야대 @박해미
import { getApi } from "../../utils/response";
import DogService from "../services/dog.service";

const DogController = {
  updateDog: async (req, res, next) => {
    try {
      const { key } = req.headers;
      const { dogId } = req.params;
      const { name, age, kind, meal1 } = req.body;
      const dog = await DogService.updateDog(key, dogId, name, age, kind, meal1);
      if (dog == "" || dog == null || dog == undefined || (dog != null && typeof dog == "object" && !Object.keys(dog).length)) {
        res.status(201).json(getApi({ suc: false }));
      } else {
        res.status(201).json(getApi({ suc: true }));
      }
    } catch (error) {
      // error handling
      next(error);
    }
  },

  feedDog: async (req, res, next) => {
    try {
      const { dogId } = req.params;
      const { userId } = req.body;
      await DogService.feedDog(dogId, userId);
      if (dog == "" || dog == null || dog == undefined || (dog != null && typeof dog == "object" && !Object.keys(dog).length)) {
        res.status(201).json(getApi({ suc: false }));
      } else {
        res.status(201).json(getApi({ suc: true }));
      }
    } catch (error) {
      // error handling
      next(error);
    }
  },

  snackDog: async (req, res, next) => {
    try {
      const { dogId } = req.params;
      const { userId } = req.body;
      await DogService.snackDog(dogId, userId);
      if (dog == "" || dog == null || dog == undefined || (dog != null && typeof dog == "object" && !Object.keys(dog).length)) {
        res.status(201).json(getApi({ suc: false }));
      } else {
        res.status(201).json(getApi({ suc: true }));
      }
    } catch (error) {
      // error handling
      next(error);
    }
  },
};

export default DogController;
