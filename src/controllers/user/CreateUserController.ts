import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserServices';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, age } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      password,
      age,
    });

    return response.json(user);
  }
}

export { CreateUserController };
