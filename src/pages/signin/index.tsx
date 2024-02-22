import { LuCheck, LuXCircle } from 'react-icons/lu'
import {
  Input,
  InputContent,
  InputFeedback,
  InputIcon,
} from '../../components/ui/input'
import { useLogin } from '../../hooks/useLogin'

export function SignIn() {
  const { data, handleChange, validations } = useLogin()

  return (
    <>
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
    </>
  )
}
