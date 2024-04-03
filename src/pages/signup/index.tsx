import { LuCheck, LuXCircle } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import {
  Input,
  InputContent,
  InputFeedback,
  InputIcon,
} from '../../components/ui/input'
import { Logo } from '../../components/ui/logo'
import { useRegister } from '../../hooks/useRegister'
import theme from '../../styles/theme'
import * as Styled from './styles'

export function SignUp() {
  const { data, handleChange, handleSubmit, validations, formRef } =
    useRegister()

  return (
    <Styled.Main>
      <Logo />

      <form ref={formRef} onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend>Crie sua conta</legend>
          <Input
            color={[
              theme.COLORS.TINTS.MINT[100],
              theme.COLORS.TINTS.TOMATO[400],
            ]}
          >
            <InputContent
              id="name"
              label="Seu Nome"
              placeholder="Exemplo: Maria da Silva"
              type="text"
              value={data.user.name}
              onChange={handleChange}
              validation={validations.name}
            >
              <InputIcon
                isValid={data.field.name.valid}
                icon={[LuCheck, LuXCircle]}
              />
            </InputContent>
            <InputFeedback>{data.field.name.message}</InputFeedback>
          </Input>
          <Input
            color={[
              theme.COLORS.TINTS.MINT[100],
              theme.COLORS.TINTS.TOMATO[400],
            ]}
          >
            <InputContent
              id="email"
              label="Email"
              placeholder="Exemplo: exemplo@exemplo.com.br"
              type="email"
              value={data.user.email}
              onChange={handleChange}
              validation={validations.email}
            >
              <InputIcon
                isValid={data.field.email.valid}
                icon={[LuCheck, LuXCircle]}
              />
            </InputContent>
            <InputFeedback>{data.field.email.message}</InputFeedback>
          </Input>
          <Input
            color={[
              theme.COLORS.TINTS.MINT[100],
              theme.COLORS.TINTS.TOMATO[400],
            ]}
          >
            <InputContent
              id="password"
              label="Senha"
              placeholder="No mínimo 6 caracteres"
              type="password"
              value={data.user.password}
              onChange={handleChange}
              validation={validations.password}
            >
              <InputIcon
                isValid={data.field.password.valid}
                icon={[LuCheck, LuXCircle]}
              />
            </InputContent>
            <InputFeedback>{data.field.password.message}</InputFeedback>
          </Input>
          <Input
            color={[
              theme.COLORS.TINTS.MINT[100],
              theme.COLORS.TINTS.TOMATO[400],
            ]}
          >
            <InputContent
              id="confirmPassword"
              label="Confirmar senha"
              placeholder="No mínimo 6 caracteres"
              type="password"
              value={data.user.confirmPassword}
              onChange={handleChange}
              validation={validations.confirmPassword}
            >
              <InputIcon
                isValid={data.field.confirmPassword.valid}
                icon={[LuCheck, LuXCircle]}
              />
            </InputContent>
            <InputFeedback>{data.field.confirmPassword.message}</InputFeedback>
          </Input>
        </fieldset>

        <Button>Criar conta</Button>
        <Link to={'/login'}>
          <Button variant="link">Já tenho uma conta</Button>
        </Link>
      </form>
    </Styled.Main>
  )
}
