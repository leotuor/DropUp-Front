"use server"
import { signOut } from "@/auth";

export async function logoutFunction(){
  await signOut();
}