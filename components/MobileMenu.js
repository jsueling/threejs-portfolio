import Link from 'next/link'

export default function MobileMenu ({ menuItems, mobileMenuOpen, setMobileMenu }) {

  return (
    <div className='flex flex-col items-start'>
      {menuItems.map((item) =>
        <Link key={item.title} href={item.href}>
          <a onClick={() => setMobileMenu(!mobileMenuOpen)} className='first:mt-5 mb-5 border-2 border-green-600' >{item.title}</a>
        </Link>
      )}
    </div>
  )
}