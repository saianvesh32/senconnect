//   "use server"
// import { signIn } from "@/lib/auth";
// import action from "@/lib/action"
// const LoginPage = () => {
//   const handleGithubLogin = async () => {
//     "use server";
//     try{
//       await signIn('github');
//     }catch(error){
//       console.log("iam in error broo")
//       console.log(error)
//     }
//   }
//   return (
//     <div>
//       <form action={handleGithubLogin}>
//     <button>Login with Github</button>
//       </form>
//     </div>
//   )
// }

// export default LoginPage
// import { auth, signIn } from "../../../lib/auth";
// import { handleGithubLogin } from "../../../lib/action";
// const Login = async () => {
//     const session = await auth();
//     console.log(session);
  
//     return (
//         <div className="mt-16 w-1/2 m-auto bg-gray-700 p-5 rounded">
//             <div className="w-3/4 m-auto flex justify-between">
//                 <form action={handleGithubLogin}>
//                     <button className="bg-black p-4 rounded">Login with Github</button>
//                 </form>
//                 <form action={handleGithubLogin}>
//                     <button className="bg-black p-4 rounded">Login with Google</button>
//                 </form>
//             </div>
//         </div>
//     );
// }
// export default Login;
import LoginForm from "../../../components/loginForm/loginForm";
import { handleGithubLogin } from "../../../lib/action";
import styles from "./login.module.css";

const LoginPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;