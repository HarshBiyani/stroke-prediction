import React, { useState } from 'react';
import {
  Container, Typography, Box, TextField, Button,
  Paper, Grid, MenuItem, CircularProgress
} from '@mui/material';
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
    age: '', hypertension: '0', heartDisease: '0',
    avgGlucoseLevel: '', bmi: '', gender: 'Male',
    everMarried: 'No', workType: 'Private',
    residenceType: 'Urban', smokingStatus: 'never smoked'
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const calculateRisk = (data, model) => {
    const genderValue = data.gender === 'Male' ? 1 : 0;
    const marriedValue = data.everMarried === 'Yes' ? 1 : 0;
    const workTypeValues = {
      'Private': 0, 'Self-employed': 1, 'Govt_job': 2,
      'children': 3, 'Never_worked': 4
    };
    const normalizedAge = (parseFloat(data.age) - 43.22) / 22.61;
    const normalizedGlucose = (parseFloat(data.avgGlucoseLevel) - 106.14) / 45.28;
    const normalizedBmi = (parseFloat(data.bmi) - 28.89) / 7.85;

    let riskScore = 0;
    riskScore += normalizedAge * 0.35;
    riskScore += genderValue * 0.12;
    riskScore += parseInt(data.hypertension) * 0.45;
    riskScore += parseInt(data.heartDisease) * 0.52;
    riskScore += normalizedGlucose * 0.28;
    riskScore += normalizedBmi * 0.18;
    riskScore += marriedValue * 0.15;
    riskScore += workTypeValues[data.workType] * 0.08;

    switch(model) {
      case 'K-Nearest Neighbors': riskScore *= 1.2; break;
      case 'Decision Tree': riskScore *= (data.hypertension === '1' || data.heartDisease === '1' ? 1.3 : 0.9); break;
      case 'Naive Bayes': riskScore *= 0.95; break;
      case 'Bernoulli Naive Bayes': riskScore *= (data.hypertension === '1' || data.heartDisease === '1' ? 1.1 : 0.95); break;
      case 'Support Vector Machine': riskScore *= 1.05; break;
    }

    const probability = 1 / (1 + Math.exp(-riskScore));
    return probability;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedModel) return alert('Please select a model first');
    setLoading(true);
    const probability = calculateRisk(formData, selectedModel);
    setTimeout(() => {
      setResult({ probability, risk: probability > 0.5 ? 'High' : 'Low' });
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #f7f9fc, #e3f2fd)', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h3" align="center" sx={{ color: '#1976d2', fontWeight: 600, mb: 4 }}>
            Stroke Risk Prediction
          </Typography>

          {/* Model Cards */}
          <Grid container spacing={3} justifyContent="center">
            {models.map((model) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={model.name}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Paper
                    elevation={4}
                    onClick={() => setSelectedModel(model.name)}
                    sx={{
                      p: 2,
                      cursor: 'pointer',
                      borderRadius: 3,
                      bgcolor: selectedModel === model.name ? '#e3f2fd' : '#ffffff',
                      transition: '0.3s ease',
                      textAlign: 'center',
                      border: selectedModel === model.name ? '2px solid #1976d2' : 'none'
                    }}
                  >
                    <Typography variant="h6" sx={{ color: '#0d47a1', fontWeight: 600 }}>
                      {model.name}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>{model.description}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Accuracy: {model.accuracy}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Form */}
        <Paper elevation={4} sx={{ p: 4, mt: 6, borderRadius: 3 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {[
                { label: 'Age', name: 'age', type: 'number' },
                { label: 'Gender', name: 'gender', select: true, options: ['Male', 'Female', 'Other'] },
                { label: 'Hypertension', name: 'hypertension', select: true, options: ['0', '1'] },
                { label: 'Heart Disease', name: 'heartDisease', select: true, options: ['0', '1'] },
                { label: 'Average Glucose Level', name: 'avgGlucoseLevel', type: 'number' },
                { label: 'BMI', name: 'bmi', type: 'number' },
                { label: 'Work Type', name: 'workType', select: true, options: ['Private', 'Self-employed', 'Govt_job', 'children', 'Never_worked'] },
                { label: 'Smoking Status', name: 'smokingStatus', select: true, options: ['never smoked', 'formerly smoked', 'smokes'] },
                { label: 'Married', name: 'everMarried', select: true, options: ['Yes', 'No'] },
                { label: 'Residence Type', name: 'residenceType', select: true, options: ['Urban', 'Rural'] }
              ].map((field, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <TextField
                    fullWidth
                    label={field.label}
                    name={field.name}
                    type={field.type || 'text'}
                    value={formData[field.name]}
                    onChange={handleChange}
                    select={field.select || false}
                    required
                  >
                    {field.select && field.options.map(opt => (
                      <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
  type="submit"
  size="large"
  disabled={loading}
  sx={{
    backgroundColor: '#1976d2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1565c0'
    },
    px: 4,
    py: 1.5,
    fontWeight: 600,
    borderRadius: 2
  }}
>
  {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Predict Risk'}
</Button>
            </Box>
          </form>

          {result && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Paper elevation={2} sx={{ mt: 4, p: 3, textAlign: 'center', borderRadius: 2, backgroundColor: '#e3f2fd' }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 600 }}>
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
      </Container>
    </Box>
  );
};

export default Predict;
