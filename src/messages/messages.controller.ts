import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';
import { Message } from './types/message.type';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Post('/')
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/')
  getMessages() {
    return this.messagesService.findAll();
  }

  @Get('/:id')
  getMessage(@Param('id') id: string): Promise<Message> {
    return this.messagesService.findOne(id);
  }
}
