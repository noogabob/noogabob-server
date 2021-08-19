import { executeQuery, transaction } from "./pool";

const User = {
  findByKey: async (fId, userId) => {
    const query = "SELECT id FROM user WHERE fId = ? AND id = ?;";
    const values = [fId, userId];
    const [key] = await executeQuery(query, values);
    return key.id;
  },
  postUser: async (key, name, role) => {
    let query = "INSERT INTO user (fId, name, role) VALUES (?,?,?)";
    let values = [key, name, role];
    await transaction({query, values});

    query = "SELECT id FROM user WHERE fId = (SELECT fId FROM family WHERE fId = ?) AND name = ? AND role = ?";
    values = [key, name, role];
    const [data] = await executeQuery(query, values);
    return data.id;
  },
  findById: async (userId, key) => {
    const query = "SELECT * FROM user WHERE (id = ? AND fId = (SELECT fId FROM family WHERE fId = ?))";
    const values = [userId, key];
    // 구조 분해
    const user = await executeQuery(query, values);
    return user;
  },

  updateUser: async (userId, name, role, key) => {
    const query = "UPDATE user SET name = ?, role = ? WHERE (id = ? AND fId = (SELECT fId FROM family WHERE fId = ?))";
    const values = [name, role, userId, key];
    await transaction({query, values});
    return user;
  },

  deleteUser: async (userId, key) => {
    const query = "DELETE FROM user WHERE (id = ? AND fId = (SELECT fId FROM family WHERE fId = ?)) ";
    const values = [userId, key];
    await transaction({query, values});
  },
};

export default User;
