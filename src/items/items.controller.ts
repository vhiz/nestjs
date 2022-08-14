import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interface/items.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService:ItemsService){}
    @Get()
    async findall():Promise<Item[]> {
        return this.itemsService.findAll()
    }

    @Get(':id')
    async findone(@Param('id') id):Promise<Item> {
        return this.itemsService.findOne(id)
        }

    @Post()
    async create(@Body() createItemDto: CreateItemDto):Promise<Item> {
        return await this.itemsService.create(createItemDto)
    }
    
    @Delete(':id')
    async delete(@Param('id') id): Promise<Item>{
        return await this.itemsService.delete(id)
    }

    @Put('id')
    update(@Param('id') id, @Body() updateItemDto: CreateItemDto): Promise<Item>{
        return this.itemsService.update(id, updateItemDto)
    }
}
