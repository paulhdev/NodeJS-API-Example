import { hash } from 'bcryptjs';
import prismaClient from '../../../prisma';

interface UserRequest {
  name: string;
  email: string;
  password: string;
  age: number;
}

class CreateUserService {
  async execute({ name, email, password, age }: UserRequest) {
    if (!name || !email || !password) {
      throw new Error('All data is required');
    }

    const emailAlreadyExists = await prismaClient.user.findUnique({
      where: { email: email },
    });

    if (emailAlreadyExists) {
      throw new Error('Email already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
        age,
      },
      select: {
        id: true,
        name: true,
        email: true,
        age: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
