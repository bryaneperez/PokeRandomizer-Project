import React from 'react'
import {Menu,Drawer,Button,Typography,IconButton,DrawerProps,MenuHandler,MenuList,MenuItem} from "@material-tailwind/react";


export function Filter() {
    const [open, setOpen] = React.useState(false);
   
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
   
    return (
      <React.Fragment>
        <Button onClick={openDrawer}>Filters</Button>
        <Drawer open={open} onClose={closeDrawer} className="p-4">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Filters
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div className="justify-items-center flex flex-col">
            <Menu>
                <MenuHandler>
                <Button size="sm">Generation</Button>
                </MenuHandler>
                <MenuList className='z-[9999]'>
                    <MenuItem>Generation 1</MenuItem>
                    <MenuItem>Generation 2</MenuItem>
                    <MenuItem>Generation 3</MenuItem>
                    <MenuItem>Generation 4</MenuItem>
                    <MenuItem>Generation 5</MenuItem>
                    <MenuItem>Generation 6</MenuItem>
                    <MenuItem>Generation 7</MenuItem>
                    <MenuItem>Generation 8</MenuItem>
                    <MenuItem>Generation 9</MenuItem>
                </MenuList>
            </Menu>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }