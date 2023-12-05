"use client"

import { db } from "@/firebase"
import { addDoc, collection } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useState } from "react"

function CheckoutButton() {
    const {data: session} = useSession()
    const [loading, setLoading] = useState(false)
    const createChekoutSession = async () => {
        if (!session) return
        setLoading(true)
        //push doc into firestore db
        const docRef = await addDoc(
          collection(db, "customers", session.user.id, "checkout_sessions"),
        {
          price: "price_1OK1aZIQLTagaLTxPfpqpwmV",
          success_url: window.location.origin,
          cancel_url: window.location.origin,
        } )
        // stripe ext on firebase will create checkout
    }
  return (
    <button
    onClick={()=>createChekoutSession()}
     className="mt-8 
    block rounded-md bg-indigo-500 px-3.5 py-2 text-center 
    text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
    focus-visible:ring-indigo-500 cursor-pointer disabled:opacity-80">
        Sign Up
    </button>
  )
}

export default CheckoutButton