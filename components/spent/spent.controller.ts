import { Request, Response } from 'express';
import { ISpentService } from './spent.interface.service';
import { Spent } from './spent.model';

export class SpentController {
  constructor(
    private spentService: ISpentService
  ) {}

  async createSpent(request: Request, response: Response){
    const { type, tag, amount, date } = request.body;

    try {
      await this.spentService.createSpent({
        type,
        tag,
        amount,
        date
      });

      return response.status(201).json({
        message: 'Spent created'
      });
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }
  }

  async updateSpent(request: Request, response: Response){
    const { id, type, tag, amount, date } = request.body;

    try {
      await this.spentService.updateSpent({
        id,
        type,
        tag,
        amount,
        date
      });

      return response.status(200).json({
        message: 'Spent updated'
      });
    } catch(err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }
  }

  async findById(request: Request, response: Response) {
    const { id } = request.body;

    try {
      const spent = await this.spentService.findById(id);

      return response.status(200).json({
        data: spent
      });
    } catch(err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }
  }

  async findByTag(request: Request, response: Response) {
    const { tag } = request.body;

    try {
      const spents: Array<Spent> = await this.spentService.findByTag(tag);
      
      return response.status(200).json({
        data: spents
      });
    } catch(err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }
  }

  async findByType(request: Request, response: Response) {
    const { type } = request.body;

    try {
      const spents: Array<Spent> = await this.spentService.findByType(type);
      
      return response.status(200).json({
        data: spents
      });
    } catch(err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }
  }
}