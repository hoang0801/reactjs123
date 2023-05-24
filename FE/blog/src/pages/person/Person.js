import { Link } from "@mui/material"
import { useState } from "react"


export default function Person() {
    // hook
    let [personArr, setPersonArr] = useState ([{id:1, name:"Hoang"}])

    let [ id, setId] = useState(0)
    let [ name, setName] = useState("")

    let [ person, setPerson] = useState({id:0, name:""})

    let save= (e) =>{
        console.log("save");
        // let p = { id, name}
        // setPersonArr([...personArr, p])
        setPersonArr([...personArr, person])
    }


    // let handLeChangId = (e) => setId(parseInt(e.target.value))
    // let handLeChangName = (e) => setName(e.target.value)

    let handLeChangPerson = (e) =>{
        setPerson({...person, [e.target.name]:e.target.value})
    }

    let deletePerson =(id)=>{
        let newArr = personArr.filter((item) => item.id !== id)

        setPersonArr(newArr)
    }
    return(
        <div>
            <form>
                <input name = "id" onChange={handLeChangPerson}/>
                <input name = "name" onChange={handLeChangPerson}/>
                <select name = "gerder" onChange={handLeChangPerson}>
                    <option value= "Nam">Nam</option>
                    <option value= "Nu">Nu</option>
                </select>
                <button type="button" onClick={save}>Save</button>
            </form>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gerder</th>
                    <th>Action</th>
                </tr>
                {
                    personArr.map(item =>{
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.gerder}</td>
                                <td><button type ="button" onClick={() => deletePerson(item.id)}> Delete</button></td>   
                                                  
                            </tr>

                           
                        )
                    })
                }
            </table>
        </div>
    )
}