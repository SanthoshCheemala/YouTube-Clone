import { Stack } from '@mui/material'
import React from 'react'
import { categories } from './utils/constant'

export default function SideBar({selectedCategory,setselectedCategory}) {
  return (
        <Stack direction="row" sx={{
             overflow:'auto',
             height:{sx:'auto',md:'95%'},
             flexDirection:{md:'column'}
        }}>
            {categories.map((Category)=> (
                <button className='category-btn'
                onClick={()=>setselectedCategory(Category.name)}
                key={Category.name}
                style={{
                    backgroundColor: selectedCategory === Category.name 
                    && '#FC1503',color:'white'
                }}
                >
                    <span
                    style={{
                        color:selectedCategory === Category.name ?
                        'white':'red',marginRight:'15px'
                    }}
                    >{Category.icon}</span>
                    <span
                    style={{opacity:selectedCategory === Category.name?
                        '1':'0.8'
                    }}
                    >{Category.name}</span>
                </button>
            ) )}

        </Stack>
  )
}
