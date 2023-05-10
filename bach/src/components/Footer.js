//{id 1, name:""}
function Footer({ id, name, cvHinhTron}) {
    // let { id, name } = props; // properties là 1 đối tượng
    let cv = cvHinhTron(6);
    return(
        <div>
            <p>ReactJs Footer</p>
            <p>{name}, {id}</p>
            <p> {cv} </p>
        </div>
    );
}

export function MenuFooter() {
    return( //jsx
        <ul>
            <li>Menu 1 </li>
            <li>Menu 2 </li>
        </ul>
    );
}

export const PI = 3.14; // export 1 hằng số
// export const ImageFooter = () => {
//     return (
//         <div>Test Image Footer</div>
//     );
// }
export const ImageFooter = () => { <div>Test Image Footer</div> } // giống bên trên nhưng ngắn gọn hơn
export default Footer; // trong 1 file chỉ export default 1 cái 