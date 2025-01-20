import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import img1 from "../assets/browse/img1.png";
import img2 from "../assets/browse/img2.png";
import img3 from "../assets/browse/img3.png";
import img4 from "../assets/browse/img4.png";

const Browse: React.FC = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
  }));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-[#F0F0F0] rounded-3xl p-8 sm:p-12 lg:p-24">
        <div className="text-center mb-12">
          <h1 className="font-integral font-extrabold text-3xl sm:text-4xl lg:text-5xl">BROWSE BY DRESS STYLE</h1>
        </div>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(12, 1fr)'
          },
          gap: 2 
        }}>
          <Box sx={{ gridColumn: { xs: '1', sm: 'span 4' } }}>
            <Item className="relative group overflow-hidden rounded-3xl h-full text-black">
              <img src={img1 || "/placeholder.svg"} alt="Casual" className="w-full h-full object-cover transition-transform duration-300 scale-110 group-hover:scale-125" />
              <div className="absolute top-0 text-black flex items-end p-6">
                <h2 className="text-2xl font-bold">Casual</h2>
              </div>
            </Item>
          </Box>
          <Box sx={{ gridColumn: { xs: '1', sm: 'span 8' } }}>
            <Item className="relative group overflow-hidden rounded-3xl h-full">
              <img src={img3} className="w-full h-full object-cover transition-transform duration-300 scale-110 group-hover:scale-125" />
              <div className="absolute top-0 text-black flex items-end p-6">
                <h2 className="text-2xl font-bold">Formal</h2>
              </div>
            </Item>
          </Box>
          <Box sx={{ gridColumn: { xs: '1', sm: 'span 8' } }}>
            <Item className="relative group overflow-hidden rounded-3xl h-full">
              <img src={img2} className="w-full h-full object-cover transition-transform duration-300 scale-110 group-hover:scale-125" />
              <div className="absolute top-0 text-black flex items-end p-6">
                <h2 className="text-2xl font-bold">Party</h2>
              </div>
            </Item>
          </Box>
          <Box sx={{ gridColumn: { xs: '1', sm: 'span 4' } }}>
            <Item className="relative group overflow-hidden rounded-3xl h-full">
              <img src={img4 } className="w-full h-full object-cover transition-transform duration-300 scale-110 group-hover:scale-125" />
              <div className="absolute top-0 text-black flex items-end p-6">
                <h2 className="text-2xl font-bold">Gym</h2>
              </div>
            </Item>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Browse