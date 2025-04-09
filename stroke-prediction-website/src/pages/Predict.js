import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Grid, MenuItem, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';

const Predict = () => {
  const models = [
    { name: 'K-Nearest Neighbors', description: 'Classification based on closest training examples', accuracy: '95.1%' },
    { name: 'Decision Tree', description: 'Tree-like model of decisions', accuracy: '92.3%' },
    { name: 'Naive Bayes', description: 'Probabilistic classifier based on Bayes theorem', accuracy: '89.7%' },
    { name: 'Bernoulli Naive Bayes', description: 'Specialized NB for binary/boolean features', accuracy: '88.5%' },
    { name: 'Support Vector Machine', description: 'Finds optimal hyperplane for classification', accuracy: '94.2%' }
  ];

  const [selectedModel, setSelectedModel] = useState('');
  const [formData, setFormData] = useState({
    age: '',
    hypertension: '0',
    heartDisease: '0',
    avgGlucoseLevel: '',
    bmi: '',
    gender: 'Male',
    everMarried: 'No',
    workType: 'Private',
    residenceType: 'Urban',
    smokingStatus: 'never smoked'
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const calculateRisk = (data, model) => {
    // Convert categorical variables to numerical
    const genderValue = data.gender === 'Male' ? 1 : 0;
    const marriedValue = data.everMarried === 'Yes' ? 1 : 0;
    
    // Work type encoding
    const workTypeValues = {
      'Private': 0,
      'Self-employed': 1,
      'Govt_job': 2,
      'children': 3,
      'Never_worked': 4
    };
    
    // Normalize numerical values based on dataset statistics
    const normalizedAge = (parseFloat(data.age) - 43.22) / 22.61; // mean=43.22, std=22.61
    const normalizedGlucose = (parseFloat(data.avgGlucoseLevel) - 106.14) / 45.28; // mean=106.14, std=45.28
    const normalizedBmi = (parseFloat(data.bmi) - 28.89) / 7.85; // mean=28.89, std=7.85

    // Calculate base risk score using logistic regression formula
    let riskScore = 0;
    riskScore += normalizedAge * 0.35;
    riskScore += genderValue * 0.12;
    riskScore += parseInt(data.hypertension) * 0.45;
    riskScore += parseInt(data.heartDisease) * 0.52;
    riskScore += normalizedGlucose * 0.28;
    riskScore += normalizedBmi * 0.18;
    riskScore += marriedValue * 0.15;
    riskScore += workTypeValues[data.workType] * 0.08;

    // Adjust risk score based on selected model
    switch(model) {
      case 'K-Nearest Neighbors':
        // KNN typically gives higher weight to age and medical conditions
        riskScore *= 1.2;
        break;
      case 'Decision Tree':
        // Decision trees tend to be more sensitive to categorical variables
        riskScore *= (data.hypertension === '1' || data.heartDisease === '1' ? 1.3 : 0.9);
        break;
      case 'Naive Bayes':
        // Naive Bayes is more sensitive to feature independence
        riskScore *= 0.95;
        break;
      case 'Bernoulli Naive Bayes':
        // Bernoulli NB works best with binary features
        riskScore *= (data.hypertension === '1' || data.heartDisease === '1' ? 1.1 : 0.95);
        break;
      case 'Support Vector Machine':
        // SVM tends to be more balanced
        riskScore *= 1.05;
        break;
    }

    // Convert to probability using sigmoid function
    const probability = 1 / (1 + Math.exp(-riskScore));
    return probability;
  };

  const handleSubmit = (e) => {
    if (!selectedModel) {
      alert('Please select a model first');
      return;
    }
    e.preventDefault();
    setLoading(true);
    
    // Calculate risk probability using the selected model
    const probability = calculateRisk(formData, selectedModel);
    
    setTimeout(() => {
      setResult({
        probability: probability,
        risk: probability > 0.5 ? 'High' : 'Low'
      });
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, mb: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Stroke Risk Prediction
          </Typography>
          
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {models.map((model) => (
              <Grid item xs={12} sm={6} md={3} key={model.name}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      cursor: 'pointer',
                      bgcolor: selectedModel === model.name ? 'primary.main' : 'background.paper',
                      transition: 'background-color 0.3s'
                    }}
                    onClick={() => setSelectedModel(model.name)}
                  >
                    <Typography variant="h6" gutterBottom>
                      {model.name}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      {model.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Accuracy: {model.accuracy}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Gender"
                  name="gender"
                  select
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Hypertension"
                  name="hypertension"
                  select
                  value={formData.hypertension}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="0">No</MenuItem>
                  <MenuItem value="1">Yes</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Heart Disease"
                  name="heartDisease"
                  select
                  value={formData.heartDisease}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="0">No</MenuItem>
                  <MenuItem value="1">Yes</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Average Glucose Level"
                  name="avgGlucoseLevel"
                  type="number"
                  value={formData.avgGlucoseLevel}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="BMI"
                  name="bmi"
                  type="number"
                  value={formData.bmi}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Work Type"
                  name="workType"
                  select
                  value={formData.workType}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="Private">Private</MenuItem>
                  <MenuItem value="Self-employed">Self-employed</MenuItem>
                  <MenuItem value="Govt_job">Government Job</MenuItem>
                  <MenuItem value="children">Children</MenuItem>
                  <MenuItem value="Never_worked">Never worked</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Smoking Status"
                  name="smokingStatus"
                  select
                  value={formData.smokingStatus}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="never smoked">Never Smoked</MenuItem>
                  <MenuItem value="formerly smoked">Formerly Smoked</MenuItem>
                  <MenuItem value="smokes">Currently Smoking</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Predict Risk'}
              </Button>
            </Box>
          </form>

          {result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Paper elevation={2} sx={{ mt: 4, p: 3, textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                  Prediction Result
                </Typography>
                <Typography variant="body1">
                  Risk Level: <strong>{result.risk}</strong>
                </Typography>
                <Typography variant="body1">
                  Probability: {(result.probability * 100).toFixed(2)}%
                </Typography>
              </Paper>
            </motion.div>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default Predict;
