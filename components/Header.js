import Link from 'next/link';

const Header = () => (
    <nav>
        <div className="navbar">
            <Link href="/about">
                <a className="link">About</a>
            </Link>
            <Link href="/">
                <a className="link">Home</a>
            </Link>
        </div>
        <style jsx>
            {`
                .link, .link:visited {
                    margin-right: 15px;
                    color: white;
                }
                .navbar {
                    padding: 15px;
                    background-color: black;
                }
            `}
        </style>
    </nav>
);

export default Header;