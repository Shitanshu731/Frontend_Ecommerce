import { User } from "./types";

export interface userReducerInitalState {
    user : User | null;
    loading : boolean;
}