import React from 'react';

import Grid from '@mui/material/Grid';

import GridItem from './GridItemMobile'


interface ItemList {
    items: {
        id: string;
        name: string;
        img: string;
        time: string;
        company: string;
        description: string;
        webURL: string;
        gitURL: string;
        backgroundColor: string;
        textColor: string;
    }[];
    linePosition: string
} 

const Work: React.FC<ItemList> = props => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={12}>
                    {props.items.map((item, i) => (
                        <GridItem 
                            id={item.id}
                            name={item.name}
                            img={item.img}
                            time={item.time}
                            company={item.company}
                            description={item.description}
                            webURL={item.webURL}
                            gitURL={item.gitURL}
                            textColor={item.textColor}
                            backgroundColor={item.backgroundColor}
                            linePosition= {props.linePosition}
                        />
                    ))}
                </Grid>
            </Grid>
        </div>
    )
};

export default Work;