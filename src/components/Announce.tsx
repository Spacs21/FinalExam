import CloseIcon from '@mui/icons-material/Close';

const Announce: React.FC<{setOpen: (open: boolean)=> void}> = ({setOpen}) => {
  return (
    <div className="bg-black">
        <div className="container mx-auto flex justify-center items-center h-[38px] text-white relative max-sm:text-[14px] px-4 max-[386px]:text-[10px]">
            <h2 className='block'>Sign up and get 20% off to your first order. <u>Sign Up Now</u></h2>
            <div className='absolute right-0' onClick={()=> setOpen(false)}>
                <CloseIcon className='cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Announce