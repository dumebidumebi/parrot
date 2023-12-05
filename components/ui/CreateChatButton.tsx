"use client"

import { Ghost, MessageSquarePlus, MessageSquarePlusIcon } from "lucide-react"
import { Button } from "./button"
import { useRouter } from "next/navigation"

export default function CreateChatButton() {
    const router = useRouter()
    const createNewChat = async() =>{
        //cool logic
        // router.push(`/chat/${chatId}`)
        router.push(`/chat/abc`)
    }
  return (
    <Button variant={"ghost"}>
        <MessageSquarePlusIcon/>
    </Button>
  )
}
