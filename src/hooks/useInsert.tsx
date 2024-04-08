import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  formatCurrencyToCents,
  formatToCurrency,
  showAlert,
} from '../lib/utils'
import { api } from '../services/api'
import { DataProps, ResponseProps, ValidationConfig } from '../types'
import { useAuth } from './useAuth'
import { useForm } from './useForm'

type InsertProps = 'name' | 'price' | 'description' | 'image' | 'id'

interface Dish {
  photo: File
  name: string
  category: string
  ingredients: string
  price: string
  description: string
  [key: string]: File | string // Index signature
}

interface UseInsertProps {
  name: string
  description: string
  price: string
}

export function useInsert(PrevData?: UseInsertProps) {
  const [select, setSelect] = useState('')
  const [ingredients, setIngredients] = useState<Array<string>>([])
  const [ingredientsValue, setIngredientsValue] = useState<string>('')
  const navigate = useNavigate()
  const { signOut } = useAuth() as {
    signOut: () => void
  }

  const initialData: DataProps<InsertProps> = {
    user: {
      name: PrevData?.name ?? '',
      description: PrevData?.description ?? '',
      price: formatToCurrency(PrevData?.price ?? '0'),
      image: '',
      id: '',
    },
    field: {
      name: { message: '', valid: true },
      description: { message: '', valid: true },
      price: { message: '', valid: true },
      image: { message: '', valid: true },
      id: { message: '', valid: true },
    },
  }

  const validation: ValidationConfig<InsertProps | 'image'> = {
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
    id: {
      validations: [],
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

  const form = useForm(initialData, validation, validateFields)

  const {
    data,
    handleChange,
    handleSubmit,
    handleFileChange,
    validations,
    formRef,
    setData,
  } = form

  return {
    form: {
      data,
      handleChange,
      handleSubmit: () => {
        handleSubmit()
        const formData = new FormData()
        const placeFile = new File(['data'], 'triste.png', {
          type: 'image/png',
        })

        const dish: Dish = {
          photo: data.image ? data.image[0] : placeFile,
          name: data.user.name,
          category: select,
          ingredients: ingredients.join(','),
          price: formatCurrencyToCents(data.user.price).toString(),
          description: data.user.description,
        }

        for (const prop in dish) {
          formData.append(prop, dish[prop])
        }

        api
          .post<ResponseProps>('/dish', formData, { withCredentials: true })
          .then((response) => {
            const { message, status } = response.data
            showAlert({ message, status })
            navigate('/')
          })
          .catch((error) => {
            if (error.response?.status === 401) signOut()
          })
      },
      handleFileChange,
      validations,
      formRef,
      setData,
    },
    handleRemoveIngredients,
    handleAddIngredients,
    handleIngredientChange,
    ingredientsValue,
    setSelect,
    ingredients,
    setIngredients,
  }
}
