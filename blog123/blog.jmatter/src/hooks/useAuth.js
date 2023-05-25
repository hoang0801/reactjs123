import { useContext } from "react";
import { AuthenContext } from "../context/authenContext";

export function useAuth() {
  let ctx = useContext(AuthenContext);
  return ctx;
}