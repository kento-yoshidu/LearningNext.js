import { useState } from "react";
import { Button } from "@mui/material";
import { ReactElement } from "react";
import { getCsrfToken, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { CtxOrReq } from "next-auth/client/_utils";
import { useForm } from "react-hook-form";

// POSTリクエスト（サインイン・サインアウトなど）に必要なCSRFトークンを返却する
export const getServerSideProps = async (context: CtxOrReq | undefined) => {
  return {
    props: {
      title: "login",
      csrfToken: await getCsrfToken(context),
    },
  };
};

interface IFormValues {
  user_code?: string;
  password?: string;
}

const Login = ({ csrfToken }: { csrfToken: string | undefined }) => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm<IFormValues>();
  const signInUser = async (data: IFormValues) => {
  // ここで<any>を書かないとtypeエラーが消えなかったので書いています
    await signIn<any>("credentials", {
      redirect: false,
      usercode: data.user_code,
      password: data.password,
      callbackUrl: `${window.location.origin}`,
    }).then((res) => {
      if (res?.error) {
        setError("UserId,Passwordを正しく入力してください");
      } else {
      // ログイン後に飛ぶページ
        router.push("/");
      }
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit(signInUser)}>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div style={{ marginTop: "15px" }}>
          <input
            type="text"
            placeholder="User ID"
            {...register("user_code")}
          ></input>
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            placeholder="Password"
          ></input>
        </div>
        <p>
          <span style={{ color: "red" }}>{error}</span>
        </p>
        <div>
          <Button
            variant="contained"
            sx={{
              width: "100%",
            }}
            type="submit"
          >
            ログイン
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
