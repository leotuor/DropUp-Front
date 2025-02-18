"use server"
import { signIn } from "@/auth";

export async function signInFunction(){
  await signIn("google");
}