import { LuCheck, LuXCircle } from 'react-icons/lu'
import { Button } from '../../components/ui/button'
import {
  Input,
  InputContent,
  InputFeedback,
  InputIcon,
} from '../../components/ui/input'
import { Logo } from '../../components/ui/logo'
import { useLogin } from '../../hooks/useLogin'
import * as Styled from './styles'

export function SignIn() {
  const { data, handleChange, handleSubmit, validations, formRef } = useLogin()

  return (
    <Styled.Main>
      <Logo />

      <form ref={formRef} onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend>Faça login</legend>
          <Input>
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
          <Input>
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
        </fieldset>

        <Button>Entrar</Button>
        <Button variant="link">Criar uma conta</Button>
      </form>
    </Styled.Main>
  )
}
