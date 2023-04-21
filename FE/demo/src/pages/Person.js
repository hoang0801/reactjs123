import { useState } from "react"


export function Person() {
    let [personArr, setPersonArr] = useState ([{id:1, name:"Test 1"}])

    let save= (e) =>{
        console.log("save");
        let p = { id, name}

        setPersonArr([...personArr, p])
    }

    let [ id, setId] = useState(0)
    let [ name, setName] = useState("")

    let handLeChangId = (e) => setId(parseInt(e.target.value))
    let handLeChangName = (e) => setName(e.target.value)
    return(
        <div>
            <form>
                <input name = "id" onChange={handLeChangId}/>
                <input name = "name" onChange={handLeChangName}/>
                <button type="button">Save</button>
            </form>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                {
                    personArr.map(item =>{
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><button type ="button" onClick={save}>Delete</button></td>                      
                            </tr>

                           
                        )
                    })
                }
            </table>
        </div>
    )
}