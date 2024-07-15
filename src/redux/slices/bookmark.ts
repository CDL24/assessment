import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Category } from '@services/models';
import { WritableDraft } from 'immer';
import { RootState } from 'redux/store';

const initialState: Array<Category> = [];
//Pushing Item
const pushItem = (state: WritableDraft<Category>[], itemObj: Category) =>{
    const category = {...itemObj};
    category.isBookmarked = true;
    state.push(category)
}
export const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers:{
        addBookmark: (state, action: PayloadAction<Category>) => {
            if(state.length === 0){
                pushItem(state, action.payload)
            }else{
                const bookmarkedItem = state.find((item)=> item.idCategory === action.payload.idCategory)
                if(bookmarkedItem){
                    //Remove Bookmark
                    state.filter((item)=> item.idCategory !== bookmarkedItem.idCategory);
                }else{
                    //Add Bookmark
                    pushItem(state, action.payload)
                }
            }
            
        }
    }
});

export const {addBookmark} = bookmarkSlice.actions;
export const bookmarkSelector = (state: RootState) => state.bookmark;
export default bookmarkSlice.reducer;   