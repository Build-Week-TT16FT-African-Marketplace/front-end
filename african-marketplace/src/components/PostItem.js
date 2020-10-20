import React from "react";
import { useState, useEffect } from "react";
import axiosWithAuth from "../utlis/axiosWithAuth";
import * as yup from 'yup';
import axios from 'axios';

const initialItem = {
    id: null,
	name: '',
	description: '',
	price: null,
	location: '',
	category: '',
	URL: '',
	user_id: null
}

const PostItem = () => {

//Comment
    return (
        <div>
          <div></div>
      <div></div>
          <form onSubmit={handleSubmit}>
            <div >
              <TextField
                name="item_name"
                onChange={handleChanges}
                value={item_name}
                label="(Item Name Here)"
                variant="outlined"
              />
    
              <TextField
                label="Content"
                multiline
                rows={6}
                variant="outlined"
                name="post_content"
                value={post_content}
                placeholder="(Post Content Here)"
                onChange={handleChanges}
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
      );
}

export default PostItem;