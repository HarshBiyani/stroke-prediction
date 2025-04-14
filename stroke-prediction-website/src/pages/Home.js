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
    <Box sx={{ background: 'linear-gradient(to bottom, #f7f9fc, #e3f2fd)', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 600, color: '#1976d2' }}>
            Stroke Prediction System
          </Typography>
          <Typography variant="h5" align="center" gutterBottom color="text.secondary">
            Using Machine Learning to Predict Stroke Risk
          </Typography>
        </motion.div>

        {/* Process Flow */}
        <Typography variant="h4" gutterBottom align="center" sx={{ mt: 6, mb: 4, color: '#0d47a1' }}>
          Project Process Flow
        </Typography>

        <Timeline position="alternate" sx={{ mb: 6 }}>
          {processSteps.map((step, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot variant="filled" color="primary" />
                {index < processSteps.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.3 }}>
                  <Paper elevation={4} sx={{ p: 3, borderRadius: 3, backgroundColor: '#ffffff' }}>
                    <Typography variant="h6" color="primary" fontWeight={600}>
                      {step.title}
                    </Typography>
                    <Typography>{step.description}</Typography>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        {/* Key Features */}
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4, color: '#0d47a1' }}>
          Key Features
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              title: 'What is Stroke?',
              content:
                'A stroke occurs when blood supply to part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients.'
            },
            {
              title: 'Our Approach',
              content:
                'We use machine learning algorithms to analyze various health parameters and predict the likelihood of a stroke, helping in early detection and prevention.'
            },
            {
              title: 'Why It Matters',
              content:
                'Early prediction and prevention of stroke can save lives. Our system helps identify risk factors and provides valuable insights for healthcare professionals.'
            }
          ].map((feature, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Paper
                  elevation={6}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 3,
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography>{feature.content}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
