import Link from 'next/link'

import { animateMap } from '../utils/animateMap'

export default function MobileMenu ({ menuItems, mobileMenuOpen, setMobileMenu }) {

  return (
    <div className='flex flex-col items-start'>
      {menuItems.map((item, index) => {
        return (
          <Link key={item.title} href={item.href} >
            <a onClick={() => setMobileMenu(!mobileMenuOpen)} className={`${animateMap[index]} mb-5 last:mb-0 opacity-0 navButton`}>{item.title}</a>
          </Link>
        )
      }
      )}
    </div>
  )
}