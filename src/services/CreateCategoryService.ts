import { CategoriesRepository } from "../respositories/CategoriesRepository";
import { ICategoriesRepository } from "../respositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

// Utilizando o  Single Responsability Principle, nós criamos uma classe que é um serviço com uma única responsabilidade, que seria de criar uma categoria. Dentro da classe nós fazemos a regra de negócio que nós necessitamos.

class CreateCategoryService {
  // Utilizando também o Dependency Inversion Principle, onde a nossa categoria não depende mais de saber quem é o repositório

  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
