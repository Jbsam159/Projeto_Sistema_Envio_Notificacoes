const fakeDB: any[] = [];

export default {
  async create(data: any) {
    const created = { id: fakeDB.length + 1, ...data };
    fakeDB.push(created);
    return created;
  },

  async findAll() {
    return fakeDB;
  }
};
