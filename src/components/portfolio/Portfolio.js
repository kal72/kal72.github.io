import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box mt={'3rem'}>
            <Grid container display={'flex'} justifyContent={'center'} columns={10} spacing={{ xs: 2, md: 3 }}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={4} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};