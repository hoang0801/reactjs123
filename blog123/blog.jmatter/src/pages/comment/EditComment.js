
// export default function EditComment() {
//   const { showError } = useError();
//   let navigate = useNavigate();

//   let { id } = useParams();
//   const { comments } = useSelector((state) => state.comment);

//   //tim comment tu list lay ra tu redux store
//   const currentComment = comments.find(c => c.id === parseInt(id));

//   const NewItemSchema = Yup.object().shape({
//     name: Yup.string().required("Required, please enter."),
//     id: Yup.number().moreThan(0, "Required number, please enter."),
//   });

//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(NewItemSchema),
//     defaultValues: currentComment
//   });


//   const save = async (comment) => {
//     let { code } = await updateCommentAPI(comment);

//     if (code === 200) {
//       toast("Thanh cong!!", { position: toast.POSITION.TOP_CENTER, type: 'success', theme: 'colored' });
//       navigate("/dashboard/comments");
//     }
//     else
//       showError(code);
//   };

//   // const handleChange = (e) => setComment({
//   //     ...comment,
//   //     [e.target.name]: e.target.value
//   // })

//   return (
//     <Grid container >
//       <Grid item xs={12} sm={6}>
//         <Stack spacing={3}>
//           <h2>Update Comment</h2>

//           <form onSubmit={handleSubmit(save)}>
//             <Stack spacing={3}>
//               <TextField label="id" {...register("id")} disabled
//                 error={errors.id}
//                 helperText={errors.id?.message} />

//               <TextField label="name" {...register("name")}
//                 error={errors.name}
//                 helperText={errors.name?.message} />

//               <Button type='submit' >Update</Button>
//             </Stack>
//           </form>

//         </Stack>
//       </Grid>
//     </Grid>
//   );
// }