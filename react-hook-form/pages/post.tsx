import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

const Post = () => {
  const router = useRouter()

  const { register, handleSubmit } = useForm()
  
  const onSubmit = async (data) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = { sample: data };

    const res = await fetch(`/api/hello`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    })

    if (res.ok) {
      router.push("/")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" {...register('email')} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" {...register('password')} type="password" />
      </div>
      <button type="submit">ログイン</button>
    </form>
  )
}

export default Post
