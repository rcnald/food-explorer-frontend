import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import { useSlide } from '../../../hooks/useSlide'
import { Button, ButtonIcon } from '../button'
import * as Styled from './styles'

interface SectionChildrenProps {
  children: React.ReactNode
}

interface SectionSliderProps {
  children: React.ReactNode
  slidesPerView: number
}

export function Section({ children }: SectionChildrenProps) {
  return (
    <Styled.Section>
      <div> {children}</div>
    </Styled.Section>
  )
}

export function SectionTitle({ children }: SectionChildrenProps) {
  return <h1>{children}</h1>
}

export function SectionSlider({ slidesPerView, children }: SectionSliderProps) {
  const {
    Slides,
    sliderRef,
    handleClickNext,
    handleClickPrev,
    isNextDisabled,
    isPrevDisabled,
  } = useSlide({ children, slidesPerView })

  return (
    <div ref={sliderRef}>
      <div>
        <Slides />
      </div>
      <Button
        variant="link"
        onClick={handleClickPrev}
        disabled={isPrevDisabled}
      >
        <ButtonIcon icon={LuChevronLeft} />
      </Button>
      <Button
        variant="link"
        onClick={handleClickNext}
        disabled={isNextDisabled}
      >
        <ButtonIcon icon={LuChevronRight} />
      </Button>
    </div>
  )
}
