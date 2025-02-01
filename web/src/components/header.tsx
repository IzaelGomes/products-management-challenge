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
    <header className="flex justify-between items-center bg-black mb-5 p-3 w-[100%]">
      <SignedIn>
        <Link className="text-white" href={"/"}>
          Home
        </Link>
      </SignedIn>
      <SignedIn>
        <div className="flex justify-center items-center gap-4">
          <Link href={"/product/create"} className="text-white">
            Criar Produto
          </Link>
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex gap-5">
          <SignInButton>
            <Button>Entrar</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Criar conta</Button>
          </SignUpButton>

          <Link href={"/products"}>Produtos</Link>
        </div>
      </SignedOut>
    </header>
  );
}
