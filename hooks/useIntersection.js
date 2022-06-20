import { useEffect } from "react"

// implementation for animation when element enters viewport using the IntersectionObserver API, credits to: https://codepen.io/jamesdoc/pen/qBbeOym?editors=1010
const useIntersection = () => {
    useEffect(() => {

      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-fadeInStay')
        })
      }

      const observer = new IntersectionObserver(callback, { threshold: 0.1 })

      const targets = document.querySelectorAll('.animateOnScroll')
      targets.forEach((target) => observer.observe(target))
    }, [])
}

export default useIntersection