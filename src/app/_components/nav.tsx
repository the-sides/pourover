import Link from "next/link";

export default () => <nav style={{display: 'flex', gap: '12px'}}>
    <Link className="text-3xl" href='/'>Home</Link>
    <Link href='/about'>About</Link>
    <Link href='/another'>Another</Link>
    <Link href='/trip'>Trips</Link>
</nav>