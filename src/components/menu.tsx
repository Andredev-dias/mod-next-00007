import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3?: string;
}

export const Menu: React.FC<IMenu> = ({op1, op2, op3}) => {
    return(
        <nav className="flex flex-wrap items-center justify-center gap-4 font-rob text-branca md:bg-green-600 md:text-pink-400">
            <Link className="bg-preta p-2 hover:bg-branca hover:text-preta transition" href={ROUTES.home}>{op1}</Link>
            <Link className="bg-preta p-2 hover:bg-branca hover:text-preta transition" href={ROUTES.axiosPage}>{op2}</Link>
            <Link className="bg-preta p-2 hover:bg-branca hover:text-preta transition" href={ROUTES.noHookPage}>{op3}</Link>
        </nav>
    )
}
   
