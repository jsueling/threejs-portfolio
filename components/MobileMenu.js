import Link from 'next/link'

import { animateMap } from '../utils/animateMap'

export default function MobileMenu ({ menuItems, setExplore, setMobileMenu }) {

  return (
    <div className='pointer-events-auto flex flex-col items-start'>
      {menuItems.map((item, index) => 
        <Link key={item.title} href={item.href} >
          <a
            onClick={() => setMobileMenu(false)}
            className={`${animateMap.staggerBounce[index]} mb-5 opacity-0 dark:text-white navButton`}
          >
            {item.title}
          </a>
        </Link>
      )}
      <div className={`${animateMap.staggerBounce[3]} opacity-0 dark:text-white cursor-pointer navButton`}>
        <a
          onClick={() => {
            setMobileMenu(false)
            setExplore(true)
          }}
        >
          Explore
        </a>
      </div>
    </div>
  )
}