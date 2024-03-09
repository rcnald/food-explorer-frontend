import { LuChevronLeft, LuUpload } from 'react-icons/lu'
import { Button, ButtonIcon } from '../../components/ui/button'
import {
  File,
  FileContent,
  FileFeedback,
  FileIcon,
} from '../../components/ui/file'
import { Footer } from '../../components/ui/footer'
import { Header } from '../../components/ui/header'

import { useState } from 'react'
import { Input, InputContent, InputFeedback } from '../../components/ui/input'
import { Select } from '../../components/ui/select'
import { Tag } from '../../components/ui/tag'
import {
  Textarea,
  TextareaContent,
  TextareaFeedback,
} from '../../components/ui/textarea'
import { useUpdate } from '../../hooks/useUpdate'
import theme from '../../styles/theme'
import * as Styled from './styles'

export function Edit() {
  const {
    data,
    handleChange,
    handleSubmit,
    handleFileChange,
    validations,
    formRef,
  } = useUpdate({ name: 'rogi', description: 'dada', price: '34343' })
  const [select, setSelect] = useState('')
  const [ingredients, setIngredients] = useState<Array<string>>([])
  const [ingredientsValue, setIngredientsValue] = useState<string>('')

  console.log(select)

  return (
    <Styled.Add>
      <Header />
      <main>
        <Button variant="link">
          <ButtonIcon icon={LuChevronLeft}></ButtonIcon>
          Voltar
        </Button>

        <form action="" ref={formRef} onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend>Adicionar prato</legend>
            <div>
              <File
                color={[
                  theme.COLORS.TINTS.MINT[100],
                  theme.COLORS.TINTS.TOMATO[400],
                ]}
              >
                <FileContent
                  id="image"
                  label="Imagem do prato"
                  placeholder={
                    data.image && data.image[0]
                      ? data.image[0].name
                      : 'Selecione imagem'
                  }
                  onChange={(e) => handleFileChange(e.target)}
                >
                  <FileIcon icon={LuUpload}></FileIcon>
                </FileContent>
                <FileFeedback>{data.field.image.message}</FileFeedback>
              </File>

              <Input
                color={[
                  theme.COLORS.TINTS.MINT[100],
                  theme.COLORS.TINTS.TOMATO[400],
                ]}
              >
                <InputContent
                  id="name"
                  label="Nome"
                  placeholder="Ex.: Salada Ceasar"
                  type="text"
                  value={data.user.name}
                  validation={validations.name}
                  onChange={handleChange}
                ></InputContent>
                <InputFeedback>{data.field.name.message}</InputFeedback>
              </Input>

              <Select
                setSelect={setSelect}
                label="Categoria"
                options={['ae', 'ue']}
              />
            </div>
            <div>
              <Styled.Tags>
                <span>Ingredientes</span>
                <div>
                  {ingredients.map((ingredient, i) => (
                    <Tag
                      variant="light"
                      key={i}
                      onClick={() =>
                        setIngredients(
                          ingredients.filter((_, index) => index !== i),
                        )
                      }
                    >
                      {ingredient}
                    </Tag>
                  ))}
                  <Tag
                    value={ingredientsValue}
                    onChange={(e) => setIngredientsValue(e.target.value)}
                    onClick={() => {
                      setIngredients(
                        ingredientsValue
                          ? [...ingredients, ingredientsValue]
                          : [...ingredients],
                      )
                      setIngredientsValue('')
                    }}
                    variant="outline"
                  ></Tag>
                </div>
              </Styled.Tags>

              <Input
                color={[
                  theme.COLORS.TINTS.MINT[100],
                  theme.COLORS.TINTS.TOMATO[400],
                ]}
              >
                <InputContent
                  id="price"
                  placeholder="R$ 00,00"
                  label="Preço"
                  type="text"
                  value={data.user.price}
                  validation={validations.price}
                  onChange={handleChange}
                ></InputContent>
              </Input>
            </div>
            <Textarea
              color={[
                theme.COLORS.TINTS.MINT[100],
                theme.COLORS.TINTS.TOMATO[400],
              ]}
            >
              <TextareaContent
                id="description"
                label="Descrição"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                type="text"
                value={data.user.description}
                validation={validations.description}
                onChange={handleChange}
              ></TextareaContent>
              <TextareaFeedback>
                {data.field.description.message}
              </TextareaFeedback>
            </Textarea>
          </fieldset>
          <div>
            <Button type="button">Excluir</Button>
            <Button type="submit">Salvar alterações</Button>
          </div>
        </form>
      </main>
      <Footer />
    </Styled.Add>
  )
}
