import Logo from "../../assets/logo/Group.png"
import { MdFlight } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import Button from "../Button";


function Header() {
    return (
        <>
            <header className='w-100 h-auto flex justify-between items-center'>
                <div className='flex gap-5'>
                    <Button buttonText="Find Flight" bg={false} rotate={true} icon={<MdFlight/>} textColor="text-white" btnIcon={true}    />
                    <Button buttonText="Find Stay" bg={false} rotate={false} icon={<IoIosBed/>} textColor="text-white"  btnIcon={true}  />
                </div>

                <div className='w-auto h-auto'>
                    <img src={Logo} alt="image" />
                </div>


                <div className="flex mr-2">
                <Button buttonText="Login" bg={false} rotate={false} icon={''} textColor="text-white" btnIcon={false}   />
                <Button buttonText="Signup" bg={true} rotate={false} icon={''} textColor="text-black"  btnIcon={false}  />
                </div>

                
            </header>
        </>
    )
}

export default Header