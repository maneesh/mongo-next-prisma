import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()
  const isActive: (pathname: string) => boolean =
    pathname => router.pathname === pathname

  return(
    <nav>
      <div className="left">
        <Link href="/">
          <p className="bold" data-active={isActive('/')}>
            Blog
          </p>
        </Link>
        <Link href="/drafts">
          <p data-active={isActive('/drafts')}>Drafts</p>
        </Link>
      </div>
      <div className="right">
        <Link href="/signup">
          <p data-active={isActive('/signup')}>Signup</p>
        </Link>
        <Link href="/create">
          <p data-active={isActive('/create')}>+ Create draft</p>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }

        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left a[data-active='true'] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }

        .right {
          margin-left: auto;
        }

        .right a {
          border: 1px solid black;
          padding: 0.5rem 1rem;
          border-radius: 3px;
        }
      `}</style>
    </nav>
  )
}

export default Header
