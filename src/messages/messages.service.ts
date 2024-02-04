import { Injectable, NotFoundException } from '@nestjs/common';

import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private messagesRepository: MessagesRepository) {}

  findAll() {
    return this.messagesRepository.findAll();
  }

  async findOne(id: string) {
    const message = await this.messagesRepository.findOne(id);

    if (!message) {
      throw new NotFoundException(`Message with ID "${id}" not found`);
    }

    return message;
  }

  create(message: string) {
    return this.messagesRepository.create(message);
  }
}
