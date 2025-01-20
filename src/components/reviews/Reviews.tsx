import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination, Autoplay } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { Review } from '../../types';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const reviews: Review[] = [
  { fname: 'Sarah M.', comment: 'I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations.', star: 5 },
  { fname: 'John D.', comment: 'Great quality and fast shipping! The customer service team was incredibly helpful when I had questions.', star: 5 },
  { fname: 'Emma W.', comment: 'Shop.co has become my go-to for all my fashion needs. The variety of products is amazing, and the prices are unbeatable.', star: 5 },
  { fname: 'Michael R.', comment: 'I was skeptical at first, but the clothes I ordered fit perfectly and look even better in person. Very impressed!', star: 4 },
  { fname: 'Lisa T.', comment: 'The attention to detail in every garment is remarkable. It\'s clear that Shop.co values quality.', star: 5 },
  { fname: 'Alex K.', comment: 'Fast delivery and the packaging was excellent. Everything arrived in perfect condition.', star: 5 },
];

const Reviews = () => {
  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='mx-auto'>
        <h1 className='font-[800] font-integral text-4xl md:text-5xl mb-12 text-center'>OUR HAPPY CUSTOMERS</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="pb-16"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Box className="bg-white rounded-[20px] p-8 shadow-sm min-h-[300px] flex flex-col border border-gray-100">
                <Rating 
                  value={review.star} 
                  readOnly 
                  size="large"
                  sx={{
                    marginBottom: '20px'
                  }}
                />
                <div className="flex items-center gap-1 mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">{review.fname}<CheckCircleIcon color='success' fontSize='medium'/></h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">{review.comment}</p>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Reviews

