import { AuthenticationController } from "../../../../../src/modules/Authentication/infra/controllers/authention.controller";
import { AuthenticationService } from "../../../../../src/modules/Authentication/adapter/services/authentication.service";
import { signInDTOMock } from "../../../../mocks/dto/sign-in.dto-mock";

describe("AuthenticationController", () => {
    let controller: AuthenticationController;
    let service: AuthenticationService;

    beforeEach(() => {
        service = {
            signIn: jest.fn()
        } as unknown as AuthenticationService;

        controller = new AuthenticationController(service);
    });

    it('should execute signIn', async () => {
        await controller.signIn(signInDTOMock);

        expect(service.signIn).toHaveBeenCalledWith(signInDTOMock);
    });
});