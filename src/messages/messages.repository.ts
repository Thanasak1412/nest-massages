import { readFile, writeFile } from 'fs/promises';

import { Message } from './types/message.type';

export class MessagesRepository {
  async findOne(id: string): Promise<Message> {
    const json = await readFile('messages.json', 'utf8');
    const content: Message[] = JSON.parse(json);

    return content[id];
  }

  async findAll(): Promise<Message> {
    const json = await readFile('messages.json', 'utf8');

    return JSON.parse(json);
  }

  async create(message: string): Promise<Message> {
    const json = await readFile('messages.json', 'utf8');
    const messages: Message[] = JSON.parse(json);

    const id = Object.keys(messages).sort((a, b) => +b - +a)[0];

    const data: Message = {
      [+id + 1]: {
        message,
        id: +id + 1,
      },
    };

    const create = {
      ...messages,
      ...data,
    };

    writeFile('messages.json', JSON.stringify(create));

    return data;
  }
}
