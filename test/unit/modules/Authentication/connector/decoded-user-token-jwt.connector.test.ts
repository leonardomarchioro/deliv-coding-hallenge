import { JwtService } from "@nestjs/jwt";
import { DecodedUserTokenJWTConnector } from "../../../../../src/modules/Authentication/adapter/connectors/decoded-user-token-jwt.connector";

describe("DecodedUserTokenJWTConnector", () => {
    let connector : DecodedUserTokenJWTConnector;
    let service : JwtService;

    beforeEach(() => {
        service = {
            decode: jest.fn().mockResolvedValue({ sub: 12 })
        } as unknown as JwtService;

        connector = new DecodedUserTokenJWTConnector(service);
    });

    it("should be execute perform", async () => {
        const result = await connector.perform('token');

        expect(service.decode).toHaveBeenCalledWith('token');
        expect(result).toHaveProperty('userId');
    });
});