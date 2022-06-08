import Link from 'next/link'

export default function MobileMenu ({ menuItems }) {

  return (
    <div className='flex flex-col items-start'>
      {menuItems.map((item) =>
        <Link key={item.title} href={item.href}>
          <a className='first:mt-10 mb-10 border-2 border-green-600' >{item.title}</a>
        </Link>
      )}
    </div>
  )
}