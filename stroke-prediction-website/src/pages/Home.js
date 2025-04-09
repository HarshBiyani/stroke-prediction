import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Home = () => {
  const processSteps = [
    { title: 'Data Collection', description: 'Gathering patient health records and parameters' },
    { title: 'Data Preprocessing', description: 'Cleaning and preparing data for analysis' },
    { title: 'Feature Engineering', description: 'Creating meaningful features for prediction' },
    { title: 'Model Training', description: 'Training various ML models on the dataset' },
    { title: 'Prediction', description: 'Making accurate stroke predictions' }
  ];
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, mb: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Stroke Prediction System
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
            Using Machine Learning to Predict Stroke Risk
          </Typography>
        </motion.div>
      </Box>

      

        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Project Process Flow
        </Typography>

        <Timeline position="alternate" sx={{ mb: 6 }}>
          {processSteps.map((step, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index < processSteps.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6" component="h3" color="primary">
                      {step.title}
                    </Typography>
                    <Typography>{step.description}</Typography>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Key Features
        </Typography>

        <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                What is Stroke?
              </Typography>
              <Typography>
                A stroke occurs when blood supply to part of the brain is interrupted or reduced, 
                preventing brain tissue from getting oxygen and nutrients.
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={4}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Our Approach
              </Typography>
              <Typography>
                We use machine learning algorithms to analyze various health parameters and predict 
                the likelihood of a stroke, helping in early detection and prevention.
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={4}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Why It Matters
              </Typography>
              <Typography>
                Early prediction and prevention of stroke can save lives. Our system helps identify 
                risk factors and provides valuable insights for healthcare professionals.
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
