// Buttons https://www.stridenyc.com/ https://stackoverflow.com/a/69170995

export default function NavButton({ children }) {
  return (
    <div className='relative h-16 w-16 mx-10'>
      <div className='absolute border border-blue-600 w-full h-full translate-x-2 translate-y-2 w-10px'>
      </div>
      <div className='flex justify-center items-center transition-all duration-[250ms] ease-in-out absolute border bg-blue-600 hover:translate-x-2 hover:translate-y-2 w-full h-full'>
        {children}
      </div>
    </div>
  )
}