import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
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

  const ageDistribution = [
    { age: '0-20', count: 425 },
    { age: '21-40', count: 1850 },
    { age: '41-60', count: 2150 },
    { age: '61-80', count: 635 },
    { age: '81+', count: 50 }
  ];

  const COLORS = ['#9C27B0', '#BA68C8', '#E1BEE7', '#CE93D8', '#AB47BC'];
  const features = [
    {
      name: 'Age',
      description: 'Age of the patient',
      insights: 'Ages range from 0-82 years, with a mean of 43.2 years.'
    },
    {
      name: 'Hypertension',
      description: 'Whether the patient has hypertension (0: No, 1: Yes)',
      insights: '10.3% of patients have hypertension.'
    },
    {
      name: 'Heart Disease',
      description: 'Whether the patient has heart disease (0: No, 1: Yes)',
      insights: '5.4% of patients have heart disease.'
    },
    {
      name: 'Glucose Level',
      description: 'Average glucose level in blood',
      insights: 'Ranges from 55.12 to 271.74, with a mean of 106.15.'
    },
    {
      name: 'BMI',
      description: 'Body Mass Index',
      insights: 'Ranges from 10.3 to 97.6, with a mean of 28.9.'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, mb: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Dataset Analysis
          </Typography>
        </motion.div>

        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Dataset Overview
          </Typography>
          <Typography paragraph>
            The dataset contains 5110 patient records with various health parameters.
            Each record includes information about age, gender, various diseases, and
            lifestyle factors that might influence the likelihood of a stroke.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Key Features
            </Typography>
            <Grid container spacing={3}>
              {features.map((feature) => (
                <Grid item xs={12} md={6} key={feature.name}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Paper elevation={2} sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom color="primary">
                        {feature.name}
                      </Typography>
                      <Typography paragraph>
                        {feature.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Key Insight: {feature.insights}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Data Distribution
            </Typography>
            
            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom align="center">
                    Glucose Level Distribution
                  </Typography>
                  <BarChart
                    width={400}
                    height={300}
                    data={glucoseLevels}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="range" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#6F4E37" />
                  </BarChart>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom align="center">
                    BMI Distribution
                  </Typography>
                  <BarChart
                    width={400}
                    height={300}
                    data={bmiDistribution}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="range" angle={-45} textAnchor="end" height={60} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#C4A484" />
                  </BarChart>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom align="center">
                    Stroke Cases by Age Group
                  </Typography>
                  <BarChart
                    width={800}
                    height={400}
                    data={strokeByAge}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="withStroke" stackId="a" fill="#6F4E37" name="With Stroke" />
                    <Bar dataKey="withoutStroke" stackId="a" fill="#C4A484" name="Without Stroke" />
                  </BarChart>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom align="center">
                    Work Type Distribution
                  </Typography>
                  <PieChart width={400} height={300}>
                    <Pie
                      data={workTypeData}
                      cx={200}
                      cy={150}
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label
                    >
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
                  <Typography variant="h6" gutterBottom align="center">
                    Age Distribution
                  </Typography>
                  <BarChart
                    width={400}
                    height={300}
                    data={ageDistribution}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#9C27B0" />
                  </BarChart>
                </Paper>
              </Grid>
            </Grid>

            <Typography variant="body1" sx={{ mt: 3 }}>
              Additional Demographics:
              - Gender Distribution: 58.3% Female, 41.7% Male
              - Residence Type: 50.8% Urban, 49.2% Rural
            </Typography>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Target Variable
            </Typography>
            <Typography paragraph>
              The target variable 'stroke' shows that approximately 4.9% of the patients in the dataset
              had a stroke. This indicates that the dataset is imbalanced, which is taken into account
              in our model training process.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dataset;
