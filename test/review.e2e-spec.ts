import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Types, disconnect } from 'mongoose';
import { CreateReviewDto } from '../src/review/dto/create-review.dto';

const productId = new Types.ObjectId().toHexString();

const testDto: CreateReviewDto =  {
  name: 'reviewName',
  title: 'Title',
  description: 'LOL',
  rating: 5,
  productId
};

describe('AppController (e2e)', () => {
    let app: INestApplication;
    let createdId: string;
    let prodId: string;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/review/create (POST) - success', async (done) => {
        return request(app.getHttpServer())
            .post('/review/create')
            .send(testDto)
            .expect(201)
            .then((res: request.Response) =>  {
                createdId = res.body._id;
                prodId = res.body.productId;
                expect(createdId).toBeDefined();
                done();
            });
    });

    it('/review/getByProduct/:productId (GET) - success', async (done) => {
        return request(app.getHttpServer())
            .get('/review/getByProduct/' + prodId)
            .expect(200)
            .then(({ body } : request.Response) => {
                expect(body.length).toBe(1);
                done();
            });
    });


    it('/review/getByProduct/:productId (GET) - success', async (done) => {
        return request(app.getHttpServer())
            .get('/review/getByProduct/' + new Types.ObjectId().toHexString())
            .expect(200)
            .then(({ body } : request.Response) => {
                expect(body.length).toBe(0);
                done();
            });
    });

    it('/review/delete/:id (DELETE) - success',  () => {
        return request(app.getHttpServer())
            .delete('/review/delete/' + createdId)
            .expect(200);
    });

    it('/review/delete/:id (DELETE) - fail',  () => {
        return request(app.getHttpServer())
            .delete('/review/delete/' + new Types.ObjectId().toHexString())
            .expect(404);
    });


    afterAll(() => {
        disconnect();
    });

});
