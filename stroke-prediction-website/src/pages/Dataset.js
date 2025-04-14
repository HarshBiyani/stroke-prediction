import React from 'react';
import {
  Container, Typography, Box, Grid, Paper
} from '@mui/material';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell
} from 'recharts';
import { motion } from 'framer-motion';

const Dataset = () => {
  const glucoseLevels = [
    { range: '55-100', count: 2100, label: 'Normal' },
    { range: '101-125', count: 1500, label: 'Prediabetes' },
    { range: '126+', count: 1510, label: 'Diabetes' }
  ];

  const bmiDistribution = [
    { range: 'Underweight (<18.5)', count: 210 },
    { range: 'Normal (18.5-24.9)', count: 1850 },
    { range: 'Overweight (25-29.9)', count: 1950 },
    { range: 'Obese (30+)', count: 1100 }
  ];

  const strokeByAge = [
    { age: '0-20', withStroke: 15, withoutStroke: 410 },
    { age: '21-40', withStroke: 45, withoutStroke: 1805 },
    { age: '41-60', withStroke: 125, withoutStroke: 2025 },
    { age: '61-80', withStroke: 55, withoutStroke: 580 },
    { age: '81+', withStroke: 10, withoutStroke: 40 }
  ];

  const workTypeData = [
    { name: 'Private', value: 65.3 },
    { name: 'Self-employed', value: 15.7 },
    { name: 'Govt job', value: 13.2 },
    { name: 'Children', value: 3.9 },
    { name: 'Never worked', value: 1.9 }
  ];

  const maritalStatusData = [
    { name: 'Married', value: 59.7 },
    { name: 'Single', value: 40.3 }
  ];

  const ageDistribution = [
    { age: '0-20', count: 425 },
    { age: '21-40', count: 1850 },
    { age: '41-60', count: 2150 },
    { age: '61-80', count: 635 },
    { age: '81+', count: 50 }
  ];

  const COLORS = ['#1976d2', '#64b5f6', '#90caf9', '#2196f3', '#42a5f5'];

  const features = [
    {
      name: 'Age',
      description: 'Age of the patient',
      insights: 'Ages range from 0–82 years, mean age is 43.2 years.'
    },
    {
      name: 'Hypertension',
      description: 'Presence of hypertension (0: No, 1: Yes)',
      insights: '10.3% of patients have hypertension.'
    },
    {
      name: 'Heart Disease',
      description: 'Presence of heart disease (0: No, 1: Yes)',
      insights: '5.4% of patients have heart disease.'
    },
    {
      name: 'Glucose Level',
      description: 'Average glucose level in blood',
      insights: 'Mean: 106.15, Range: 55.12 to 271.74'
    },
    {
      name: 'BMI',
      description: 'Body Mass Index',
      insights: 'Mean: 28.9, Range: 10.3 to 97.6'
    },
    {
      name: 'Marital Status',
      description: 'Whether patient is ever married',
      insights: 'Around 59.7% are married'
    }
  ];

  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #f7f9fc, #e3f2fd)', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 600, color: '#1976d2' }}>
            Dataset Analysis
          </Typography>
        </motion.div>

        <Paper elevation={4} sx={{ p: 4, mt: 4, borderRadius: 4 }}>
          <Typography variant="h5" gutterBottom color="primary">
            Dataset Overview
          </Typography>
          <Typography paragraph>
            The dataset contains 5110 patient records with key health and lifestyle attributes used to predict the risk of stroke.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom color="primary">
              Key Features
            </Typography>
            <Grid container spacing={3}>
              {features.map((feature) => (
                <Grid item xs={12} md={6} key={feature.name}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, backgroundColor: '#ffffff' }}>
                      <Typography variant="h6" gutterBottom sx={{ color: '#0d47a1' }}>
                        {feature.name}
                      </Typography>
                      <Typography>{feature.description}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        <strong>Key Insight:</strong> {feature.insights}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mt: 5 }}>
            <Typography variant="h5" gutterBottom color="primary">
              Data Distributions
            </Typography>

            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography align="center" variant="h6" gutterBottom>Glucose Level</Typography>
                  <BarChart width={400} height={300} data={glucoseLevels}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="range" interval={0} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#1976d2" />
                  </BarChart>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography align="center" variant="h6" gutterBottom>BMI Distribution</Typography>
                  <BarChart width={400} height={300} data={bmiDistribution}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="range" interval={0} angle={-30} textAnchor="end" height={60} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#64b5f6" />
                  </BarChart>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography align="center" variant="h6" gutterBottom>Stroke Cases by Age</Typography>
                  <BarChart width={800} height={400} data={strokeByAge}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="withStroke" stackId="a" fill="#1976d2" />
                    <Bar dataKey="withoutStroke" stackId="a" fill="#90caf9" />
                  </BarChart>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography align="center" variant="h6" gutterBottom>Work Type Distribution</Typography>
                  <PieChart width={400} height={300}>
                    <Pie data={workTypeData} cx={200} cy={150} innerRadius={60} outerRadius={100} fill="#8884d8" paddingAngle={5} dataKey="value" label>
                      {workTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography align="center" variant="h6" gutterBottom>Marital Status</Typography>
                  <PieChart width={400} height={300}>
                    <Pie data={maritalStatusData} cx={200} cy={150} innerRadius={60} outerRadius={100} fill="#8884d8" paddingAngle={5} dataKey="value" label>
                      {maritalStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography align="center" variant="h6" gutterBottom>Age Distribution</Typography>
                  <BarChart width={800} height={300} data={ageDistribution}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#2196f3" />
                  </BarChart>
                </Paper>
              </Grid>
            </Grid>

            <Typography variant="body1" sx={{ mt: 3 }}>
              <strong>Additional Demographics:</strong><br />
              Gender: 58.3% Female, 41.7% Male<br />
              Residence: 50.8% Urban, 49.2% Rural
            </Typography>
          </Box>

          <Box sx={{ mt: 5 }}>
            <Typography variant="h5" gutterBottom color="primary">
              Target Variable
            </Typography>
            <Typography paragraph>
              Only 4.9% of patients in this dataset experienced a stroke, making it an imbalanced classification problem. Special care was taken during model development to account for this imbalance.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Dataset;
