import './App.css';
import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { PieGraph } from './PieGraph';
import { LineGraph } from './LineGraph';
import { ColorBars } from './ColorBars';
import { Colors } from './Colors';
import { Aggregate } from './Aggregate';
import { Header } from './Header';


export default function App() {
  return (
    <div className="App">
      {/* Header component was imported here */}
      <Header />
      <Container maxWidth="lg">
        {/* Aggregate details was displayed on Dashboard using this component */}
        <Aggregate />

        <Grid container spacing={2} sx={{ alignItems: 'flex-end' }}>
          <Grid item xs={12} md={8}>
            {/* Line Graph was imported here */}
            <LineGraph />
          </Grid>
          <Grid item xs={12} md={4}>
            {/* Pie Graph was imported here */}
            <PieGraph />
          </Grid>
        </Grid>

        <Grid container spacing={2} >
          <Grid item xs={12} md={6} >
            {/* ColorBars were imported here */}
            <ColorBars />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Colors were imported here */}
            <Colors />
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}


