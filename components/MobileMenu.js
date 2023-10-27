import Link from 'next/link'

import { animateMap } from '../utils/animateMap'

export default function MobileMenu ({ menuItems, setExplore, setMobileMenu }) {

  return (
    <div className='pointer-events-auto flex flex-col items-start'>
      {menuItems.map((item, index) => 
        <Link key={item.title} href={item.href} >
          <a
            onClick={() => setMobileMenu(false)}
            className={`${animateMap.staggerBounce[index]} dark:text-white mb-5 opacity-0 navButton`}
          >
            {item.title}
          </a>
        </Link>
      )}
      <div className={`${animateMap.staggerBounce[3]} dark:text-white navButton opacity-0 pointer-events-auto cursor-pointer`}>
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