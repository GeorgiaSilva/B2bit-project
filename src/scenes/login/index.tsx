import Logo from '@/assets/B2Bit Logo.png'
import { useAuth } from '@/hooks/useAuth'
import { Field, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom'

interface FormData{
  email: string,
  password: string
}

const Login = () => {
  const {login} = useAuth()
  const navigate = useNavigate()

  const valoresIniciais: FormData = {
    email: '',
    password: ''
  }
  const validacao = Yup.object({
    email: Yup.string().email("Email invalido").required('Requird'),
    password: Yup.string().required('Required')
  })

  const handleSubmit = async (values:FormData,{setSubmitting,setFieldError}: any) => {
    try {
      await login(values.email, values.password)
      navigate('/profile')

    } catch(erro) {
      setFieldError('email', 'Senha ou email inválido')
    }
    setSubmitting(false)
  }
  return (
    <div className='app flex justify-center items-center'>
    <div className='w-[438px] h-[534px] px-5  rounded-2xl flex flex-col shadow-2xl'>
      <div>
        <img className='w-[295px] h-[116px] my-12 mx-auto' src={Logo} alt="logo" />
      </div>
      <div >
        <Formik
          initialValues={valoresIniciais}
          validationSchema={validacao}
  
          onSubmit={handleSubmit}
        >
          {({isSubmitting,handleSubmit}) =>(

          <form  onSubmit={handleSubmit} className='flex flex-col '>

            <label className='py-2' >E-mail</label>
            <Field
              type="text" 
              name='email' 
              className=' bg-gray-100 h-12 rounded-lg pl-5 mb-6' 
              placeholder='@gmail.com'
              
            />
            <ErrorMessage name="email" component="div" className=" text-amarelo-b2bit" />
            <label className='py-2'>Password</label>
            <Field 
            type="password" 
            name='password' 
            className=' bg-gray-100 h-12 rounded-lg pl-5 mb-6' 
            placeholder='*************' 
            
            />
            <ErrorMessage name="password" component="div" className="text-amarelo-b2bit" />


            <button type='submit' 
            className='h=12 p-3 bg-azul-b2bit-300 text-white rounded-md hover:bg-azul-b2bit-200 transition duration-500'
            disabled={isSubmitting}
            >Sign in</button>
          
          </form>
          )}
        

        </Formik>
        
      </div>
    </div>
  </div>
  )
}

export default Login