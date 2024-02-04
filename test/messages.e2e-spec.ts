import * as request from 'supertest';

import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { MessagesModule } from '../src/messages/messages.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const messagesService = {
    findAll: () => ({
      '12': { message: 'Hi John', id: 12 },
      '13': { message: 'Hello', id: 13 },
      '14': {
        message:
          'How can I check if an array is a superset of another array in JavaScript',
        id: 14,
      },
      '15': { message: 'Stop war in ukraine', id: 15 },
      '16': {
        message:
          'Let us know what you think of the daily.dev extension on the chrome store',
        id: 16,
      },
      '17': { message: 'Learning the NestJS', id: 17 },
    }),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MessagesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/messages')
      .expect(200)
      .expect({
        ...messagesService.findAll(),
      });
  });
});
