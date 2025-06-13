import { addPost } from "../../lib/action"
import { deletePost } from "../../lib/action"
const ServerActionTestPage = () => {
    // const actionincomponent=async()=>{
    //     "use server"
    //     console.log("it even works in component");
    // }
  return (
    <div>
      <form action={addPost}>
         <input type="text" placeholder='title' name="title"/>
         <input type="text" placeholder='desc' name="desc"/>
         <input type="text" placeholder='slug' name="slug"/>
         <input type="text" placeholder='userId' name="userId"/>
         <button>Create</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="postid" name="id"/>
        <button>Delete</button>
      </form>
    </div>
  )
}

export default ServerActionTestPage
