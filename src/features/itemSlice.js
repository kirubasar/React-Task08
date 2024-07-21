import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            id: 1,
            title: 'iPhone 9',
            description: 'An apple mobile which is nothing like apple',
            price: 549,
            count: 1,
            image: 'https://specs-tech.com/wp-content/uploads/2020/01/iPhone-9-600x600.jpg'
        },
        {
            id: 2,
            title: 'iPhone X',
            description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
            price: 899,
            count: 1,
            image: 'https://high.com.pk/wp-content/uploads/2024/01/iPhone-X-JV-Price-in-Pakistan-03-optimized.jpg',
        },
        {
            id: 3,
            title: 'Samsung Universe 9',
            description: "Samsung's new variant which goes beyond Galaxy to the Universe",
            price: 1249,
            count: 1,
            image: 'https://cdn.xtmobile.vn/vnt_upload/product/11_2020/thumbs/600_600_samsung_galaxy_s9_xach_tay_ban_han_quoc.jpg'
        }
    ]
};

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        increment: (state, action) => {
            const item = state.value.find(item => item.id === action.payload);
            if (item) item.count += 1;
        },
        decrement: (state, action) => {
            const item = state.value.find(item => item.id === action.payload);
            if (item && item.count > 1) item.count -= 1;
        },
        removeItem: (state, action) => {
            state.value = state.value.filter(item => item.id !== action.payload);
        },
    },
});

export const { increment, decrement, removeItem } = itemSlice.actions;

export const selectItem = (state) => state.items.value;

export default itemSlice.reducer;
