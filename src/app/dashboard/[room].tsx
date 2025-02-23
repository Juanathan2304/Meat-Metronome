import { useRouter } from "next/router";

const router = useRouter();
const {room} = router.query;

console.log(room);
export default function Room(){

 return(
  <div className={`flex flex-col grow` }>
   </div> 
    )
}