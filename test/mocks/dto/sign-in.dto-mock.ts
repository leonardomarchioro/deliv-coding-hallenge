import { SignInDto } from "../../../src/modules/Authentication/infra/dtos/sign-in.dto";
import { signInModelMock } from "../models/sign-in.model.mock";

export const signInDTOMock = new SignInDto(signInModelMock)