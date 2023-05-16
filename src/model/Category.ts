import { v4 as uuidV4 } from "uuid";

class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;


// O constructor serve para quando a clase for instanciada, ele rodar alguma coisa. Nesse caso, ele cria o uuid para o nosso category.
  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
  }
}

export {Category};