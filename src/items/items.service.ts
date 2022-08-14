import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './interface/items.interface';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModule: Model<Item>) { }
    
    async findAll(): Promise<Item[]>{
        return await this.itemModule.find();
    }

    async findOne(id: string): Promise<Item> {
        return await this.itemModule.findOne({_id: id})
    }

    async create(item: Item): Promise<Item>{
        const newItem = new this.itemModule(item)
        return await newItem.save();
    }

    async delete(id: string): Promise<Item>{
        return await this.itemModule.findByIdAndDelete(id)
    }

    async update(id: string, item: Item): Promise<Item>{
        return await this.itemModule.findByIdAndUpdate(id, item, {new: true})
    }
}
