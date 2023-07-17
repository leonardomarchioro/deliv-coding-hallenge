import { JwtService } from "@nestjs/jwt";
import { TokenGeneratorJWTConnector } from "../../../../../src/modules/Authentication/adapter/connectors/token-generate-jwt.connector";

describe("TokenGeneratorJWTConnector", () => {
    let connector: TokenGeneratorJWTConnector;
    let service: JwtService;

    beforeEach(() => {
        service = {
            sign: jest.fn()
        } as unknown as JwtService;

        connector = new TokenGeneratorJWTConnector(service);
    });

    it("should execute perform", () => {
        connector.perform(1);

        expect(service.sign).toHaveBeenCalled();
    });
});