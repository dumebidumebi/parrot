import logoImage from "../images/logos/parrot_logo.png"
import Link from "next/link"
import { AspectRatio } from "./ui/aspect-ratio"
import Image from "next/image"
function Logo() {
  return (
    <Link href='/' prefetch={false} className="overflow-hidden">
    <div className="flex items-center w-20 h-14 font-extrabold f">
        <AspectRatio
        ratio={16/9}
        className="flex items-center justify-center"
        >
            <Image
            priority
            src={logoImage}
            alt="logo"
            className="w-7"
            />
        </AspectRatio>
    </div>
    </Link>
  )
}

export default Logo