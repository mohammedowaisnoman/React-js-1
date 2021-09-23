import { Personalinfo } from "./Home/Personalinfo";
import { Professionalinfo } from "./Home/Professionalinfo";
import { ImageGalleryitem } from "./Home/ImageGalleryitem";

import "./home.css"


export const Home = () => {
    return(
         <div>
             <h3>Home</h3>

             <table>
             <tr>
                 <td><Personalinfo/></td>
                 <td><Professionalinfo/></td>
                
             </tr>
             <tr>
                 <td><ImageGalleryitem/></td>
             </tr>
         </table>
         </div>
    )
};