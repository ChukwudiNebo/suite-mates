import { useEffect, useRef } from 'react'

interface Props {
  /** runs effect if the window height is greater than scroll height i.e 30 */
  effect?(): void
  /** runs effect if the window height is lesser than scroll height i.e 30 */
  reverseEffect?(): void
}

const useMenuOnScroll = (props?: Props) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const header = ref.current

    const CLASS_LIST = ['bg-white/[0.75]', 'backdrop-blur-[2px]']

    const handleScrollNavigation = () => {
      const SCROLL_HEIGHT = window.scrollY

      if (SCROLL_HEIGHT >= 30) {
        header.classList.add(...CLASS_LIST)
        /** adds this for the notch, common issue with iphones */
        document.body.classList.add('bg-white/[0.45]')
        props?.effect?.()
      } else {
        header.classList.remove(...CLASS_LIST)
        document.body.classList.remove('bg-white/[0.45]', 'text-white')
        props?.reverseEffect?.()
      }
    }

    /** calls the handler incase the page height is already greater than 30 */
    handleScrollNavigation()

    window.addEventListener('scroll', handleScrollNavigation)

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('scroll', handleScrollNavigation)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}

export default useMenuOnScroll
