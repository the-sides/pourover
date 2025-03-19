import Link from "next/link";

export default () => <nav style={{display: 'flex', gap: '12px'}}>
    <Link href='/'>Home</Link>
    <Link href='/about'>About</Link>
    <Link href='/another'>Another</Link>
</nav>