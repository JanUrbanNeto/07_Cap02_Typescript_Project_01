import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";

interface IRequest {
   name: string;
   description: string;
}

class CreateSpecificationUseCase {
   constructor(private specificationRespository: SpecificationsRepository) {}

   execute({ name, description }): void {
      const specificationAlreadyExists = this.specificationRespository.findByName(name);

      if(specificationAlreadyExists) {
         throw new Error("Specification already exists");
      }

      this.specificationRespository.create({ name, description });
   }
}

export { CreateSpecificationUseCase }