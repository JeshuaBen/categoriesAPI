import { Router } from "express";

import { CategoriesRepository } from "../respositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  // Utilizando o SOLID, nós fizemos a separação de responsabilidades e agora nossa rota ela tem a responsabilidade de receber a requisição, de chamar o serviço, de executar algo e fornecer o retorno para quem está fazendo a requisição

  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const listAllCategories = categoriesRepository.list();
  return response.status(200).json(listAllCategories);
});

export { categoriesRoutes };
