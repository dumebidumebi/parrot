import { getServerSession } from "next-auth";
import Logo from "./Logo";
import DarkModeToggle from "./ui/DarkModeToggle";
import UserButton from "./ui/UserButton";
import { authOptions } from "@/auth";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";
import CreateChatButton from "./ui/CreateChatButton";

export default async function Header() {
  const session = await getServerSession(authOptions)
  
  return (
    <header className="sticky top-0 z-50 bg:white dark:bg-slate-600">
        <nav className="flex flex-row items-center p-5 pl-2 bg-white border-b border-gray-200 dark:bg-slate-600 max-w-7xl mx-auto">
            <Logo/>
            <div className="flex-1 flex items-center justify-end space-x-4">
            {/* select lang */}
            {session ? (
              <>
              <Link href={'/chat'} prefetch={false}/>
              <MessagesSquareIcon />
              <CreateChatButton />
              </>
              
            ) : (
              <Link href='/pricing'>
                Pricing
              </Link>
            )}
            {/* <DarkModeToggle/> */}
            {/* user button */}
            <UserButton session={session} />
            </div>
        </nav>
        {/* upgrade */}
    </header>
  )
}
