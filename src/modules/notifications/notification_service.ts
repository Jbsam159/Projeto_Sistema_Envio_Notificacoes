import repository from "./notification_repository"

export default {

  async create(data: any) {
    // regra de negócio pode vir aqui
    return repository.create(data);
  },

  async findAll() {
    return repository.findAll();
  }

}