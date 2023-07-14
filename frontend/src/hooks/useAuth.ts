import { useAppSelector } from ".";
import { RootState } from "../store";

export const useAuth = () => useAppSelector((state: RootState) => state.auth)