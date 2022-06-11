import Link from 'next/link'

export default function MobileMenu ({ menuItems, mobileMenuOpen, setMobileMenu }) {


  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  // https://github.com/tailwindlabs/tailwindcss/discussions/3461#discussioncomment-329183
  // recommended to pre-create lookup table object instead of dynamically creating classNames on the client
  const classMap = menuItems.reduce((prev, _, index) => {
    return {
      ...prev, [index]: `animate-[fadeInUp_.1s_ease-in-out_${index+1}s_1_normal_forwards] first:mt-5 mb-5 opacity-0`
    }
  }, {})

  return (
    <div className='flex flex-col items-start'>
      {menuItems.map((item, index) => {
        return (
          <Link key={item.title} href={item.href} >
            <a onClick={() => setMobileMenu(!mobileMenuOpen)} className={classMap[index]}>{item.title}</a>
          </Link>
        )
      }
      )}
    </div>
  )
}