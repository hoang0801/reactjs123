import { toast } from "react-toastify";
import { LoginAPI } from "../service/loginService";

export default function Login(){
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const onSubmit = async() =>{  
    var urlencoded = new URLSearchParams();
      urlencoded.append("username", username);
      urlencoded.append("password", password);

  const {code, result} = await LoginAPI(urlencoded)

  if (code === "200") {
    console.log(result)
  } else {
    toast(`Error: ${code}`, { position: toast.POSITION.TOP_CENTER, type: 'error', theme: 'colored' })
  }
}
return(
  <h1>hoang</h1>
)
}