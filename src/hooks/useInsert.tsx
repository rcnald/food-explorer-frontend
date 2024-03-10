import { useState } from 'react'
import { formatToCurrency } from '../lib/utils'
import { DataProps, ValidationConfig } from '../types'
import { useForm } from './useForm'

type InsertProps = 'name' | 'price' | 'description' | 'image'

interface UseInsertProps {
  name: string
  description: string
  price: string
}

export function useInsert(data?: UseInsertProps) {
  const [select, setSelect] = useState('')
  const [ingredients, setIngredients] = useState<Array<string>>([])
  const [ingredientsValue, setIngredientsValue] = useState<string>('')

  console.log(select)

  const initialData: DataProps<InsertProps> = {
    user: {
      name: data?.name ?? '',
      description: data?.description ?? '',
      price: formatToCurrency(data?.price ?? '0'),
      image: '',
    },
    field: {
      name: { message: '', valid: true },
      description: { message: '', valid: true },
      price: { message: '', valid: true },
      image: { message: '', valid: true },
    },
  }

  const validations: ValidationConfig<InsertProps | 'image'> = {
    name: {
      validations: [
        {
          validation: (value) => value.replace(/\d/g, ''),
          type: 'active',
          errorMessage: () => '',
        },
        {
          validation: (value) => value.length > 0,
          type: 'passive',
          errorMessage: () => 'Preencha este campo',
        },
      ],
    },
    description: {
      validations: [
        {
          validation: (value) => value.replace(/\d/g, ''),
          type: 'active',
          errorMessage: () => '',
        },
        {
          validation: (value) => value.length > 0,
          type: 'passive',
          errorMessage: () => 'Preencha este campo',
        },
      ],
    },
    price: {
      validations: [
        {
          validation: (value) => value.replace(/[^\d.,]/g, ''),
          type: 'active',
          errorMessage: () => '',
        },
        {
          validation: (value) => Number(value.replace(/\D/g, '')) > 0,
          type: 'passive',
          errorMessage: () => 'Preencha este campo',
        },
        {
          validation: formatToCurrency,
          type: 'active',
          errorMessage: () => '',
        },
      ],
    },
    image: {
      validations: [
        {
          validation: (files) => files.length > 0,
          type: 'passive',
          errorMessage: () => 'Adicione uma foto',
        },
      ],
    },
  }

  const validateFields: Array<InsertProps> = ['name', 'price', 'description']

  // const filePlaceHolder =
  //   data.image && data.image[0] ? data.image[0].name : 'Selecione imagem'

  const handleIngredientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredientsValue(e.target.value)
  }

  const handleRemoveIngredients = (i: number) => {
    setIngredients(ingredients.filter((_, index) => index !== i))
  }

  const handleAddIngredients = () => {
    setIngredients(
      ingredientsValue ? [...ingredients, ingredientsValue] : [...ingredients],
    )
    setIngredientsValue('')
  }

  const form = useForm(initialData, validations, validateFields)

  return {
    form,
    handleRemoveIngredients,
    handleAddIngredients,
    handleIngredientChange,
    ingredientsValue,
    setSelect,
    ingredients,
  }
}
