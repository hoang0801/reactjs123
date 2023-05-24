import { addPostAPI, deletePostAPI, searchPostAPI, updatePostAPI } from "../../service/post.service"

export function Post(){
    let [postArray, setPostArray] = useState ([])
    let [ post , setPost]= useState({
        "id": 0,
        "title": "test",
        "description": "done",
        "image": "null",
        "category": {
          "id": 1
        },
        "createdBy": {
          "id": 2
        },
        "createdAt": "28/03/2023 14:31:45"
    })

    let [ search, setsearch]= useState({
        page: 0,
        size: 20,
        value: "%%", // giá trị
        orders: [  
          {
            order: "asc", 
            property: "id", 
          },
        ],
    })

    let addPost = async ()=>{
        try{
            console.log(post)
            let resp = await addPostAPI(post)//awai dung trong ham async
            console.log("tao post thanh cong")
        } catch(err) {
            console.log(post)
        }
    }
        useEffect(()=>{},[post])

    let searchPost = async()=>{
            try{
                let resp = await searchPostAPI(search)
                console.log(resp.data)
                setPostArray(resp.data)
            }catch (err){
                console.log(err)
            }
    }
        useEffect(() =>{
            if(search)
            searchPost(),[];
        },[search]) // search thay đổi thì getData() sẽ được gọi
    
    let deletePost = async(id) =>{
            try{
            let yes = window.confirm("Are you sure want to delete this item ?");
            let resp = await deletePostAPI(id); //await dùng trong hàm async 
            let newArray = postArray.filter(function (item) {
                //Tương đương ((item) => item.id !== id);
                return item.id !== id;
              })
              console.log("delete thang cong")
              setPostArray(newArray.data.data)
            }catch(err){
            console.log(err)
            }
        }
    let updatePost = async ()=>{
            try{
                console.log(post)
                let resp = await updatePostAPI(post) // await dung trong ham async
                console.log( "update data:", resp.data)
                console.log("update post thanh cong")
                setPostArray(resp.data.data)
            } catch(err){
                console.log(err)
            }
        }
    
    
    let handleSearchPost = (e) =>{
            setsearch({...search,[e.target.name]:e.target.value})
         }
    let handleChangePost = (e) =>{
            setUser({...post,[e.target.name]:e.target.value})
         }
    }