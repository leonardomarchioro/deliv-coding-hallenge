import { PrismaRepository } from "../../../../../src/global/repositories/prisma.repository";
import { CreateUserPrismaConnector } from "../../../../../src/modules/Users/adapter/connectors/create-user-prisma.connector";
import { createUserModelMock } from "../../../../mocks/models/create-user.model.mock";
import { createdUserModelMock } from "../../../../mocks/models/created-user.model.mock";

describe("CreateUserPrismaConnector", () => {
    let connector: CreateUserPrismaConnector;
    let repository: PrismaRepository;

    beforeEach(() => {

        repository = {
            user: {
                create: jest.fn().mockResolvedValue(createdUserModelMock)
            }
        } as unknown as PrismaRepository

        connector = new CreateUserPrismaConnector(repository);
    })

    it('should be defined', () => {
        expect(connector).toBeDefined()
    })

    it('should be execute', async () => {
        const result = await connector.execute(createUserModelMock);

        expect(repository.user.create).toHaveBeenCalledWith({ data: createUserModelMock });
        expect(result).toEqual(createdUserModelMock);
    })

});