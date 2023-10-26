import Link from 'next/link'

import { animateMap } from '../utils/animateMap'

export default function MobileMenu ({ menuItems, mobileMenu, setMobileMenu }) {

  return (
    <div className='pointer-events-auto flex flex-col items-start'>
      {menuItems.map((item, index) => 
        <Link key={item.title} href={item.href} >
          <a
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`${animateMap.staggerBounce[index]} dark:text-white mb-5 last:mb-0 opacity-0 navButton`}
          >
            {item.title}
          </a>
        </Link>
      )}
    </div>
  )
}