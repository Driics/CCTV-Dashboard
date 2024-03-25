import Link from "next/link";
import Logo from "../../../public/logo.svg"

interface Props {
    className?: string
    hideFooter?: boolean
}

export const Footer = (props: Props) => {
    if (props.hideFooter) {
        return null
    }

    return (
        <footer className="bg-background-100  border-t border-gray-alpha-400 px-8 py-7 pb-8">
            <nav className="flex max-w-xl max-lg:w-full max-lg:flex-col flex-nowrap justify-between m-auto"
                 aria-label="DemonsIT Directory" role="navigation">
                <div className="flex items-center gap-5 justify-between w-full">
                    <div className="flex items-center max-md:mb-4 gap-5 w-full max-md:justify-between max-md:flex-row">
                        <div className="flex flex-initial flex-row items-center gap-3 justify-start p-0 ">
                            <Link href={"/"}>
                                <Logo className="size-6"/>
                            </Link>
                            <p className="text-sm whitespace-nowrap font-sans text-gray-900">
                                © {new Date().getFullYear()}
                            </p>
                        </div>
                        <div className="">
                            <a href="/"
                               className="inline-flex transition-all max-w-fit items-center gap-2 rounded-md px-3 py-1 text-sm text-gray-900 hover:bg-[#333]">
                                <span className="relative flex h-2 w-2">
                                    <span
                                        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 duration-1000"/>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"/>
                                </span>
                                Всё работает нормально
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <section>

            </section>
        </footer>
    );
}