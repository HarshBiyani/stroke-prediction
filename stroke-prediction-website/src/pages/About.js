import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, mb: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            About the Project
          </Typography>
        </motion.div>

        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Project Overview
          </Typography>
          <Typography paragraph>
            This stroke prediction system uses machine learning to analyze various health parameters 
            and predict the likelihood of a stroke. The model takes into account factors such as age, 
            hypertension, heart disease, glucose levels, and lifestyle factors.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Technology Stack
          </Typography>
          <Typography paragraph>
            - Machine Learning: Python, scikit-learn
            - Data Analysis: Pandas, NumPy
            - Frontend: React, Material-UI
            - Data Visualization: Matplotlib, Seaborn
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Model Features
          </Typography>
          <Typography paragraph>
            Our model considers the following key factors:
            - Age
            - Hypertension
            - Heart Disease
            - Average Glucose Level
            - BMI
            - Smoking Status
            - Work Type
            - Residence Type
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Accuracy and Performance
          </Typography>
          <Typography paragraph>
            The model has been trained on a comprehensive dataset and validated using various 
            metrics to ensure reliable predictions. We continuously work on improving the model's 
            accuracy and performance.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About;
