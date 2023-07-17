import { PrismaRepository } from "../../../../../src/global/repositories/prisma.repository";
import { FindUserPrismaConnector } from "../../../../../src/modules/Users/adapter/connectors/find-user-prisma.connector";
import { createUserModelMock } from "../../../../mocks/models/create-user.model.mock";
import { createdUserModelMock } from "../../../../mocks/models/created-user.model.mock";

describe("FindUserPrismaConnector", () => {
    let connector: FindUserPrismaConnector;
    let repository: PrismaRepository;

    beforeEach(() => {

        repository = {
            user: {
                findFirst: jest.fn().mockResolvedValue(createdUserModelMock)
            }
        } as unknown as PrismaRepository

        connector = new FindUserPrismaConnector(repository);
    })

    it('should be defined', () => {
        expect(connector).toBeDefined()
    })

    it('should be execute', async () => {
        const id = 1

        const result = await connector.execute({ id });

        expect(repository.user.findFirst).toHaveBeenCalledWith({ where: { id }});
        expect(result).toEqual(createdUserModelMock);
    })

});