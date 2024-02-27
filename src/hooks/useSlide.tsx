import { Children, useEffect, useRef, useState } from 'react'

interface SlideProps {
  children: React.ReactNode
  slidesPerView: number
}

export function useSlide({ slidesPerView, children }: SlideProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const totalSlides =
    Children.count(children) -
    (Children.count(children) >= slidesPerView ? slidesPerView - 1 : 0)

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1)
  }

  const isPrevDisabled = currentIndex === 0
  const isNextDisabled = currentIndex === totalSlides - 1

  useEffect(() => {
    if (sliderRef.current) {
      const cardRef = sliderRef.current.querySelector(`#slide-${currentIndex}`)
      if (cardRef instanceof HTMLElement) {
        cardRef.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        })
      }
    }
  }, [currentIndex])

  function Slides() {
    return (
      <>
        {Children.toArray(children).map((child, index) => (
          <div key={index} id={`slide-${index}`}>
            {child}
          </div>
        ))}
      </>
    )
  }

  return {
    handleClickNext,
    handleClickPrev,
    isPrevDisabled,
    isNextDisabled,
    sliderRef,
    Slides,
  }
}
