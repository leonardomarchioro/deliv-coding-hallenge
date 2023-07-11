import { INestApplication, ValidationPipe } from "@nestjs/common";

export async function setupGlobalPipes({ app }:{ app: INestApplication }): Promise<void> {
    app.useGlobalPipes(new ValidationPipe());
}