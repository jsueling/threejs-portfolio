import CloseIcon from "./heroicons/CloseIcon"
import DarkMode from "./DarkMode"
import { animateMap } from "../utils/animateMap"

export default function Explore({ setExplore, dark, setDark }) {

  const exploreCommands = [
    "Hold left click to rotate",
    "Hold right click to drag",
    "Scroll to zoom",
  ]

  return (
    <>
      <div className='flex'>
        <div
          onClick={() => setExplore(prev => !prev)}
          className='dark:text-white cursor-pointer pointer-events-auto'
          role="button"
          tabIndex={0}
          aria-label="Close"
        >
          <CloseIcon />
        </div>
        <DarkMode
          mobileMenu={true} // when true causes darkmode to animate in from the right
          dark={dark}
          setDark={setDark}
        />
      </div>
      <div className='dark:text-white pointer-events-none mt-[10vh] sm:mt-0 h-[60vh] flex flex-col sm:justify-center'>
        {exploreCommands.map((str, i) =>
          <div 
            className={`${animateMap.staggerUp[i]} font-light mb-2.5 opacity-0 dark:text-white`}
            key={str}
          >
            {str}
          </div>
          )}
        <div className='hidden sm:block w-full h-[10vh]'></div>
      </div>
    </>
  )
}