"use client"
import { useRouter } from "next/navigation";
import { useReducer } from "react";

type typeForm = {
  username: string
  password: string
}

const initForm = {
  username: "",
  password: "",
}

function reducerForm(state:typeForm, action:{ type:string, payload?:string }) {
  if( action.payload && action.type==='set_username' ) return { ...state, username:action.payload }
  else if( action.payload && action.type==='set_password' ) return { ...state, password:action.payload }
  else if( action.type==='clean' ) return initForm
  return state
}

export default function App() {
  const router = useRouter()
  const [form, dispatch] = useReducer(reducerForm, initForm)

  const handleAction = async () => {
    const response = await fetch('/api/auth', {
      method:'post',
      body: JSON.stringify({
        username  : form.username,
        password  : form.password
      })
    })
    const { token, logged } = await response.json()
    if( token ) {
      sessionStorage.setItem('user-dash', JSON.stringify({
        token,
        ...logged
      }) )
      router.push('/admin/products')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center">
          Login
        </h2>
        <form className="mt-4">
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={ev => dispatch({ type:'set_username', payload:ev.target.value })}
            className="w-full p-2 border rounded mt-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={ev => dispatch({ type:'set_password', payload:ev.target.value })}
            className="w-full p-2 border rounded mt-2"
          />
          <button
            type="button"
            className="mt-4 bg-black text-white p-2 rounded w-full"
            onClick={handleAction}>Login</button>
        </form>
      </div>
    </div>
  );
}
