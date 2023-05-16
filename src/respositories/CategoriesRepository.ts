import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

// DTO -> Data transfer object -> Toda vez que nós precisarmos pegar informações da nossa rota para podermos realizar uma criação dentro do nosso repostory, nós utlizaremos um DTO, que é um objeto que faz essa função.

class CategoriesRepository implements ICategoriesRepository {
  // Nesse caso aqui, não podemos definir com const e precisamos estabelecer quem vai ter acesso às nossas categorias. Se será um acesso público ou privado. Nesse caso, o único ente que terá acesso ao nosso categories vai ser o CategoriesRepository.

  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    // Aqui eu instancio a classe category, fazendo assim com que nosso constructor seja chamado e por conseguinte o uuid seja atribuído ao id.
    const category = new Category();

    // Com o object.assign eu irei atribuir as caracteristicas para as informações dentro do Category
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
