import { authOptions } from "@/auth"
import PricingCards from "@/components/ui/PricingCards"
import { getServerSession } from "next-auth"

async function Register() {
    const session = await getServerSession(authOptions)
  return (
<div className="isolate h-full overflow-hidden bg-white pb-40">
  <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-center lg:px-8">
    <div className="mx-auto max-w-4x1">
      <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
        Lets handle your Membership {session?.user?.name?.split(" ")[0]}!
      </p>
    </div>
    <div className="relative">

    <svg
        width="1208"
        height="1024"
        viewBox="0 0 1208 1024"
        className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 sm:top-12 md:top-20 lg:top-12 xl:top-0"
        style={{ maskImage: "radial-gradient(closest-side, white, transparent)" }}
    >
        {/* <ellipse
    cx="604"
    cy="512"
    rx="604"
    ry="512"
    fill="url(#radial-gradient)"
/> */}
        <defs>
            <radialGradient id="radial-gradient" >
                <stop offset="0%" stopColor="#7775D6" />
                <stop offset="100%" stopColor="#E935C1" />
            </radialGradient>
        </defs>
        
    </svg>
</div>

  </div>
  <PricingCards redirect={false} />
</div>
  )
}

export default Register