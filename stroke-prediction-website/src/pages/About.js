import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  Link,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #f0f8ff, #e3f2fd)', py: 10 }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 600, color: '#1976d2' }}>
            Stroke Prediction Using Machine Learning
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
            An end-to-end ML solution for early stroke risk detection
          </Typography>
        </motion.div>

        {/* Links */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, mt: 4 }}>
          <Button variant="outlined" color="primary" component={Link} href="https://github.com/HarshBiyani/stroke-prediction/blob/main/report.pdf" target="_blank">Project Report</Button>
          <Button variant="outlined" color="primary" component={Link} href="https://github.com/HarshBiyani/stroke-prediction/blob/main/stroke-prediction.ipynb" target="_blank">Source Code</Button>
          <Button variant="outlined" color="primary" component={Link} href="https://github.com/HarshBiyani/stroke-prediction/blob/main/health.csv" target="_blank">Dataset</Button>
          <Button variant="outlined" color="primary" component={Link} href="https://www.canva.com/design/DAGkWk0nGaM/bCcz1-zPx6dSk2CTkOzHuw/edit?utm_content=DAGkWk0nGaM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Slides</Button>
        </Box>

        {/* Main Content */}
        <Paper elevation={6} sx={{ p: 5, mt: 6, borderRadius: 4, backgroundColor: '#ffffff' }}>
          {/* Abstract */}
          <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', fontWeight: 600 }}>Abstract</Typography>
          <Typography paragraph>
          Stroke remains one of the leading causes of mortality and long-term disability worldwide, making early detection crucial for effective intervention and prevention. However, accurately predicting stroke risk is a complex task due to the multifactorial nature of the disease, involving a combination of demographic, clinical, and lifestyle-related variables. In this work, we present a comprehensive machine learning-based approach to stroke prediction using the publicly available Stroke Prediction Dataset sourced from Kaggle. Our methodology integrates extensive data preprocessing—including outlier handling, missing value imputation, and categorical encoding—with a comparative analysis of multiple supervised classification models. We explore a suite of traditional and advanced models, including Logistic Regression, Naive Bayes (Gaussian and Bernoulli), Support Vector Machine (SVM), Decision Tree, k-Nearest Neighbors (KNN), and Multi-Layer Perceptron (MLP). Through rigorous performance evaluation using metrics such as precision, recall, F1-score, and accuracy, we identify the most effective models for stroke prediction. Our results demonstrate that while Logistic Regression and MLP achieve the highest overall accuracy (95.77%), significant challenges persist in identifying true positive stroke cases due to class imbalance. This study underscores the importance of tailored preprocessing and model selection in healthcare-focused machine learning applications and paves the way for more nuanced future research in predictive diagnostics for stroke.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* Approach */}
          <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', fontWeight: 600 }}>Our Approach</Typography>
          <Typography paragraph>
            We trained and evaluated several machine learning models on preprocessed healthcare data. The models include:
          </Typography>
          <List dense>
            {[
              'Logistic Regression',
              'Naive Bayes (Gaussian and Bernoulli)',
              'K-Nearest Neighbors (KNN)',
              'Support Vector Machine (SVM)',
              'Multilayer Perceptron (MLP)'
            ].map((model, idx) => (
              <ListItem key={idx}><ListItemText primary={model} /></ListItem>
            ))}
          </List>

          <Divider sx={{ my: 4 }} />

          {/* Video */}
          <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', fontWeight: 600 }}>Explanation</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/WqTlzUl23c0?si=V6BF_sTEqAwYTEkC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Team */}
          <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', fontWeight: 600 }}>Our Team</Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {['Harsh Biyani', 'Rishi Kaneria', 'Nikhil Upadhey', 'Anand Kharane', 'Kathan Zula', 'Poojan Patel'].map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Card elevation={3} sx={{ borderRadius: 3, textAlign: 'center', p: 2 }}>
                    <Avatar sx={{ width: 64, height: 64, mx: 'auto', mb: 1 }} />
                    <CardContent>
                      <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                        {member}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
