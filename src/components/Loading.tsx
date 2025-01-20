import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className='w-screen h-[400px]'>
        <div className=' flex justify-center items-center'>
            <CircularProgress size="3rem" />
        </div>
    </div>
  )
}

export default Loading