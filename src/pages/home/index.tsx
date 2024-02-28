import { FaHeart, FaRegHeart } from 'react-icons/fa'
import image from '../../assets/Mask group-1.png'
import {
  Card,
  CardAction,
  CardControls,
  CardDescription,
  CardImage,
  CardPrice,
  CardTitle,
} from '../../components/ui/card'
import { Footer } from '../../components/ui/footer'
import { Header } from '../../components/ui/header'
import { Hero } from '../../components/ui/hero'
import {
  Section,
  SectionSlider,
  SectionTitle,
} from '../../components/ui/section'
import * as Styled from './styles'

export function Home() {
  return (
    <Styled.Home>
      <Header />
      <Hero />

      <main>
        <Section>
          <SectionTitle>Refeições</SectionTitle>
          <SectionSlider slidesPerView={3}>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
          </SectionSlider>
        </Section>
        <Section>
          <SectionTitle>Sobremesas</SectionTitle>
          <SectionSlider slidesPerView={3}>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
          </SectionSlider>
        </Section>
        <Section>
          <SectionTitle>Bebidas</SectionTitle>
          <SectionSlider slidesPerView={3}>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
            <Card>
              <CardAction
                isToggle={true}
                icons={{ regular: FaRegHeart, toggled: FaHeart }}
              />
              <CardImage src={image} alt="DADA" />
              <CardTitle>Torradas de Parma </CardTitle>
              <CardDescription>
                Presunto de parma e rúcula em um pão com fermentação natural.
              </CardDescription>
              <CardPrice>25.97</CardPrice>
              <CardControls />
            </Card>
          </SectionSlider>
        </Section>
      </main>
      <Footer />
    </Styled.Home>
  )
}
