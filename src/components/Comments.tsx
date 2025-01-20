import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import { CommentType } from "../types";
import { CommentCreateType } from "../types";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const initialState: CommentCreateType = {
    author: "",
    text: "",
    star: 2,
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
};

const Comments = () => {
    const queryClient = useQueryClient()
    const [form, setForm] = useState<CommentCreateType>(initialState)
    const [open, setOpen] = React.useState(false);
    const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedCommentId, setSelectedCommentId] = React.useState<string | null>(null);
    const handleOpen = () => setOpen(true);
    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>, commentId: string) => {
        setMenuAnchorEl(event.currentTarget);
        setSelectedCommentId(commentId);
    };
    const handleMenuClose = () => {
        setMenuAnchorEl(null);
        setSelectedCommentId(null);
    };
    const handleClose = () => setOpen(false);
    const { id } = useParams<{ id: string }>();
    const {data} = useQuery<CommentType[]>({
        queryKey: ['reviews'],
        queryFn: ()=> {
            return axios
                    .get(`https://6787c598c4a42c9161082dbc.mockapi.io/blogs/${id}/comments/`)
                    .then(res => res.data)
        } 
    })
    
    const handleCreate = useMutation({
        mutationFn: ()=> axios.post(`https://6787c598c4a42c9161082dbc.mockapi.io/blogs/${id}/comments`, form),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['reviews'] })
        },
    })
    
    const handleDelete = useMutation({
        mutationFn: (commentId: string) => axios.delete(`https://6787c598c4a42c9161082dbc.mockapi.io/blogs/${id}/comments/${commentId}`),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['reviews'] })
        },
    })

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        handleCreate.mutate();
        handleClose();
        window.scrollTo(0, document.body.scrollHeight)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleRatingChange = (_event: React.SyntheticEvent, newValue: number | null) => {
        setForm(prevForm => ({
            ...prevForm,
            star: newValue || 2
        }));
    };

  return (
    <div className="p-4">
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-2">All Reviews <span className="text-gray-500 text-lg">({data?.length})</span></h1>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                    <div className="max-md:hidden">
                        <FormControl sx={{ m: 1, minWidth: 120, borderRadius: '62px', backgroundColor: '#f0f0f0' }}>
                            <InputLabel htmlFor="grouped-native-select">Category</InputLabel>
                            <Select
                                native
                                defaultValue=""
                                id="grouped-native-select"
                                label="Grouping"
                                sx={{ borderRadius: '62px', border: 'none' }}
                            >
                                <option aria-label="None" value="" />
                                <optgroup label="Category 1">
                                    <option value={1}>Latest</option>
                                    <option value={2}>High Rating</option>
                                </optgroup>
                                <optgroup label="Category 2">
                                    <option value={3}>Low Rating</option>
                                    <option value={4}>Oldest</option>
                                </optgroup>
                            </Select>
                        </FormControl>
                    </div>
                    <button className="bg-black text-white font-medium rounded-full px-6 py-3 ml-4 hover:bg-gray-800 transition duration-300" onClick={handleOpen}>Write a Review</button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} className="max-w-lg mx-auto rounded-lg shadow-lg p-6">
                            <Typography id="modal-modal-title" variant="h6" component="h2" className="text-center text-black font-semibold mb-4">
                                Write Your Review
                            </Typography>
                            <div>
                                <form action="" onSubmit={handleSubmit} className="flex flex-col items-center p-4 text-center gap-4">
                                    <input 
                                        type="text" 
                                        name="author" 
                                        placeholder="Your Name..." 
                                        className="w-full px-3 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                        onChange={handleChange}
                                    />
                                    <input 
                                        type="text" 
                                        name="text" 
                                        placeholder="Review..." 
                                        className="w-full px-3 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                        onChange={handleChange}
                                    />
                                    <Rating
                                        name="simple-controlled"
                                        value={form.star}
                                        onChange={handleRatingChange}
                                        className="text-gray-400"
                                    />
                                    <button 
                                        type="submit" 
                                        className="bg-gray-700 text-white font-medium rounded-full px-5 py-2 hover:bg-gray-600 transition-transform duration-300 transform hover:scale-105"
                                    >
                                        Upload
                                    </button>
                                </form>
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data?.map((comment: CommentType) => (
                    <div key={comment.id} className="w-full p-6 border h-[241px] rounded-3xl shadow-lg hover:shadow-xl transition duration-300">
                        <div className="flex justify-between items-center mb-2">
                            <Rating name="read-only" value={comment.star} readOnly />
                            <Button sx={{color: "black"}} onClick={(event) => handleMenuClick(event, comment.id)}>
                                <MoreHorizIcon className="cursor-pointer hover:text-gray-600 transition duration-300"/>
                            </Button>
                            <Menu
                                id={`menu-${comment.id}`}
                                anchorEl={menuAnchorEl}
                                open={Boolean(menuAnchorEl) && selectedCommentId === comment.id}
                                onClose={handleMenuClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={() => { handleMenuClose(), handleDelete.mutate(comment.id) }}>Delete</MenuItem>
                            </Menu>
                        </div>
                        <h2 className="text-xl flex items-center font-bold mb-2">{comment.author} <CheckCircleIcon fontSize="small" color="success" className="ml-2"/></h2>
                        <p className="text-gray-700 mb-2">{comment.text}</p>
                        <p className="text-gray-500 text-sm">{comment.createdAt}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Comments