import Link from "next/link";
import {useRouter} from  "next/router";

const NavLink = ({ href, title }) => {

  const route = useRouter()
  return (
    <Link
      href={href}
      className={`${route.pathname ==`${href}` ? 'block py-8 pl-3 pr-4 font-bold text-white uppercase sm:text-xl md:text-2xl font-sans  md:p-0 hover:text-white border-b-4 border-blue-500':
       'block py-8 pl-3 pr-4 font-bold text-[#726F6F] uppercase sm:text-xl md:text-2xl font-sans  md:p-0 hover:text-white'}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;