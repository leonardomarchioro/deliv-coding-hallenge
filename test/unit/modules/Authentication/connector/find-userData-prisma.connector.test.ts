import { PrismaRepository } from '../../../../../src/global/repositories/prisma.repository';
import { FindUserDataPrismaConnector } from '../../../../../src/modules/Authentication/adapter/connectors/find-userData-prisma.connector';

describe('FindUserDataPrismaConnector', () => {
  let connector: FindUserDataPrismaConnector;
  let repository: PrismaRepository;

  beforeEach(() => {
    repository = {
      user: {
        findFirst: jest.fn(),
      },
    } as unknown as PrismaRepository;

    connector = new FindUserDataPrismaConnector(repository);
  });

  it('should execute perform', async () => {
    await connector.perform({ id: 1 });

    expect(repository.user.findFirst).toHaveBeenCalled();
  });
});
