import Link from "next/link";
const Navbar = () => {
    const navlist = [
        { lable: "Renovation", href: "/" },
        { lable: "Facades", href: "/" },
        { lable: "Flooring", href: "/" },
        { lable: "Portfolio", href: "/" },
        { lable: "contact", href: "/" },
        { lable: "Get A Quote", href: "/" },
    ];
    return (
        <nav className="sticky top-0 bg-white grid grid-cols-3 w-screen items-center text-center shadow-xl">
            <div className="">
                <h1>mohammed azzam ahdab</h1>
            </div>
            <div className="col-span-2 flex gap-10 justify-center">
                {navlist.map((items) => (
                    <Link href={items.href} key={items.lable}>
                        {items.lable}
                    </Link>
                ))}
            </div>
        </nav>
    );
};
export default Navbar;
