import Link from 'next/link'

export default function MobileMenu ({ menuItems, setMobileMenu }) {

  return (
    <div className='fixed inset-0 bg-purple-50 flex justify-center items-center'>
      {menuItems.map((item) =>
        <Link key={item.title} href={item.href}>
          <a className='border-4' onClick={() => setMobileMenu((prev) => !prev)}>{item.title}</a>
        </Link>
      )}
    </div>
  )
}