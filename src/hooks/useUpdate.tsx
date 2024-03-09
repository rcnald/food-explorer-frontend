import { DataProps, ValidationConfig } from '../types'
import { useForm } from './useForm'

type InsertProps = 'name' | 'price' | 'description' | 'image'

export function useUpdate(data: {
  name: string
  description: string
  price: string
}) {
  const formatPrice = (value: string) => {
    const digits = value.replace(/\D/g, '')

    const formatoMoeda = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    return formatoMoeda.format(Number(digits) / 100)
  }

  const initialData: DataProps<InsertProps> = {
    user: {
      name: data.name ?? '',
      description: data.description ?? '',
      price: formatPrice(data.price ?? '0'),
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
          validation: (value) => value.length > 0,
          type: 'passive',
          errorMessage: () => 'Preencha este campo',
        },
        {
          validation: formatPrice,
          type: 'active',
          errorMessage: () => '',
        },
      ],
    },
    image: {
      validations: [
        {
          validation: (files) => files.length >= 0,
          type: 'passive',
          errorMessage: () => 'Adicione uma foto',
        },
      ],
    },
  }

  const validateFields: Array<InsertProps> = ['name', 'name', 'description']

  return useForm(initialData, validations, validateFields)
}
