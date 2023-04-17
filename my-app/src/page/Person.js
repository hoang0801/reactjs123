import React ,{ useState } from "react"

export function Person() {
    //hook luu ham hay doi tuong (use)
    let [personArr, setPersonArr] = useState([{id: 1, name:"Hoang" }])

    let [id,setId] = useState(0)
    let [name,setName] = useState("")

    let [person,setPerson] = useState({id:0 , name: ""})

    let save = (e)=>{
        console.log("save")
        // let p = {id, name};
        // setPersonArr([...personArr, p])

        setPersonArr([...personArr, person]);
    }

    let handleChangeId = (e)=>setId(parseInt(e.target.value));
    let handleChangeName = (e)=>setName((e.target.value))

    let handleChangePerson = (e)=>{       
        setPerson({...person, [e.target.name]: e.target.value});

    let leletePerson = (id)=>{
        let newArr = person.filter(item => item.id !==id)

        setPersonArr(newArr);


    }


    }

    return (
        <div>
            <form>
                <input name="id" onChange={handleChangeId}/>
                <input name="name"onChange={handleChangeName}/>
                <select name="gender" onChange={handleChangeName}>
                    <option value="Name">Nam</option>
                    <option value="Nu">Nu</option>
                </select>
                <button type="button"onClick={save}>Save</button>

                </form>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                    {
                        personArr.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.Gender}</td>
                                    {/* <td><button type="button" onClick={()=> deletePerson(item.id)}>Delete</button></td> */}
                                </tr>
                            )
                        })
                    }
                </table>
            
        </div>
    )
}