import { LuChevronLeft, LuPlus, LuUpload, LuX } from 'react-icons/lu'
import { Button, ButtonIcon } from '../../components/ui/button'
import {
  File,
  FileContent,
  FileFeedback,
  FileIcon,
} from '../../components/ui/file'
import { Footer } from '../../components/ui/footer'
import { Header } from '../../components/ui/header'

import { Input, InputContent, InputFeedback } from '../../components/ui/input'
import { Select } from '../../components/ui/select'
import { Tag, TagIcon } from '../../components/ui/tag'
import {
  Textarea,
  TextareaContent,
  TextareaFeedback,
} from '../../components/ui/textarea'
import { useInsert } from '../../hooks/useInsert'
import theme from '../../styles/theme'
import * as Styled from './styles'

export function Add() {
  const {
    form,
    handleAddIngredients,
    handleRemoveIngredients,
    handleIngredientChange,
    ingredientsValue,
    ingredients,
    setSelect,
  } = useInsert()

  const {
    data,
    handleChange,
    handleSubmit,
    handleFileChange,
    validations,
    formRef,
  } = form

  const filePlaceHolder =
    data.image && data.image[0] ? data.image[0].name : 'Selecione imagem'

  return (
    <Styled.Add>
      <Header />
      <main>
        <Button onClick={() => history.back()} variant="link">
          <ButtonIcon icon={LuChevronLeft} />
          Voltar
        </Button>

        <form
          action=""
          ref={formRef}
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
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
                  placeholder={filePlaceHolder}
                  onChange={(e) => handleFileChange(e.target)}
                >
                  <FileIcon icon={LuUpload} />
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
                />
                <InputFeedback>{data.field.name.message}</InputFeedback>
              </Input>

              <Select
                type="button"
                setSelect={setSelect}
                label="Categoria"
                options={[
                  { name: 'Refeição', value: 'meal' },
                  { name: 'Bebida', value: 'drink' },
                  { name: 'Sobremesa', value: 'dessert' },
                ]}
              />
            </div>
            <div>
              <Styled.Tags>
                <span>Ingredientes</span>
                <div>
                  {ingredients.map((ingredient, i) => (
                    <Tag variant="light" key={i}>
                      {ingredient}
                      <TagIcon
                        icon={LuX}
                        onClick={() => handleRemoveIngredients(i)}
                      />
                    </Tag>
                  ))}
                  <Tag
                    value={ingredientsValue}
                    onChange={handleIngredientChange}
                    variant="outline"
                    onClick={handleAddIngredients}
                  >
                    <TagIcon icon={LuPlus} onClick={handleAddIngredients} />
                  </Tag>
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
                />
                <InputFeedback>{data.field.price.message}</InputFeedback>
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
          <Button type="button" onClick={() => handleSubmit()}>
            Salvar alterações
          </Button>
        </form>
      </main>
      <Footer />
    </Styled.Add>
  )
}
