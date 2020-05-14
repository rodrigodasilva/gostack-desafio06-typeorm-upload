import { getRepository, getCustomRepository } from 'typeorm';

import Transaction from '../models/Transaction';
import CategoriesRepository from '../repositories/CategoriesRepository';

import AppError from '../errors/AppError';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionRepository = getRepository(Transaction);
    const categoriesRepository = getCustomRepository(CategoriesRepository);

    if (!['income', 'outcome'].includes(type)) {
      throw new AppError("Error: type has to be 'income' or 'outcome'");
    }

    const categoryExists = await categoriesRepository.findByTitle(category);

    let categoryIdNewCategory = '';
    if (!categoryExists) {
      const newCategory = categoriesRepository.create({
        title: category,
      });

      await categoriesRepository.save(newCategory);

      categoryIdNewCategory = newCategory.id;
    }

    const transaction = transactionRepository.create({
      title,
      value,
      type,
      category_id: categoryExists ? categoryExists.id : categoryIdNewCategory,
    });

    await transactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
