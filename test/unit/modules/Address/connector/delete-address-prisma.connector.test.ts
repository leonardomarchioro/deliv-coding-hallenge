import { PrismaRepository } from "../../../../../src/global/repositories/prisma.repository";
import { DeleteAddressPrismaConnector } from "../../../../../src/modules/Address/adapter/connector/delete-address-prisma.connector";

describe("DeleteAddressPrismaConnector", () => {
    let connector: DeleteAddressPrismaConnector;
    let repository: PrismaRepository;

    const id = 1;

    beforeEach(() => {

        repository = {
            address: {
                delete: jest.fn()
            }
        } as unknown as PrismaRepository;

        connector = new DeleteAddressPrismaConnector(repository);
    })

    it("should be execute", async () => {
        await connector.execute(id);

        expect(repository.address.delete).toHaveBeenCalledWith({ where: { id }});
    });

});
