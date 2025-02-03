import {
  SignedIn,
  UserButton,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-black mb-5 p-3 w-[100%]">
      <SignedIn>
        <div className="flex justify-between items-center gap-4">
          <Link className="text-white" href={"/"}>
            Home
          </Link>

          <div className="flex justify-center items-center gap-4">
            <Link href={"/product/create"} className="text-white">
              Criar Produto
            </Link>
            <UserButton />
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="flex justify-end gap-4">
          <SignInButton>
            <Button>Entrar</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Criar conta</Button>
          </SignUpButton>
        </div>
      </SignedOut>
    </header>
  );
}
