import { AuthenContext } from "../context/AuthenContext";
import { useContext } from "react";

export function useLoginUser() {
    const {user} = useContext(AuthenContext);
    return user;
}

export function useAuth() {
    const { loading, user, logout } = useContext(AuthenContext);
    return {loading, user, logout}
}