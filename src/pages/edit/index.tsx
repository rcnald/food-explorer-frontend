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

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useUpdate } from '../../hooks/useUpdate'
import { formatToCurrency, handleError, showAlert } from '../../lib/utils'
import { api } from '../../services/api'
import theme from '../../styles/theme'
import { ResponseProps } from '../../types'
import * as Styled from './styles'

interface DishProps {
  id: number
  name: string
  description: string
  photo: string
  price: number
  category: 'dessert' | 'drink' | 'meal'
  ingredients: [
    {
      name: string
      id: number
    },
    {
      name: string
      id: number
    },
  ]
}

interface ResponseDish {
  dish: DishProps
}

export function Edit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [dish, setDish] = useState<DishProps>()

  const handleDeleteDish = async (id: string | undefined) => {
    if (id) {
      await api
        .delete<ResponseProps>(`/dish/${id}`, { withCredentials: true })
        .then((response) => {
          const { message, status } = response.data
          showAlert({ message, status })
          navigate('/')
        })
        .catch((error) => {
          const { message, status } = handleError(error)
          showAlert({ message, status })
        })
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const dish = await api.get<ResponseDish>(`/dish/${id}`)

      setDish(dish.data.dish)
    }

    fetchData()
  }, [id])

  const {
    form,
    handleAddIngredients,
    handleRemoveIngredients,
    handleIngredientChange,
    ingredientsValue,
    ingredients,
    setSelect,
    setIngredients,
  } = useUpdate()

  const {
    data,
    handleChange,
    handleSubmit,
    handleFileChange,
    validations,
    formRef,
    setData,
  } = form

  const filePlaceHolder =
    data.image && data.image[0] ? data.image[0].name : 'Selecione imagem'

  useEffect(() => {
    setIngredients(dish?.ingredients.map((ingredient) => ingredient.name) ?? [])
    setData({
      user: {
        name: dish?.name ?? '',
        description: dish?.description ?? '',
        price: formatToCurrency(dish?.price.toString() ?? '0'),
        image: '',
        id: dish?.id.toString() ?? '',
      },
      field: {
        name: { message: '', valid: true },
        description: { message: '', valid: true },
        price: { message: '', valid: true },
        image: { message: '', valid: true },
        id: { message: '', valid: true },
      },
    })
  }, [setData, dish, setIngredients])

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
          id={id}
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
              {dish?.category ? (
                <Select
                  type="button"
                  setSelect={setSelect}
                  label="Categoria"
                  value={dish.category}
                  options={[
                    { name: 'Refeição', value: 'meal' },
                    { name: 'Bebida', value: 'drink' },
                    { name: 'Sobremesa', value: 'dessert' },
                  ]}
                />
              ) : null}
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
          <div>
            <Button type="button" onClick={() => handleDeleteDish(id)}>
              Excluir
            </Button>
            <Button type="button" onClick={() => handleSubmit()}>
              Salvar alterações
            </Button>
          </div>
        </form>
      </main>
      <Footer />
    </Styled.Add>
  )
}
