import { Injectable } from '@nestjs/common';

import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private messagesRepository: MessagesRepository) {}

  findAll() {
    return this.messagesRepository.findAll();
  }

  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  create(message: string) {
    return this.messagesRepository.create(message);
  }
}
