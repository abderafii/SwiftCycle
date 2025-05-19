import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
} from "@mui/material";

function Contactus() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 2 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center" fontWeight={600}>
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom align="center" sx={{ mb: 3 }}>
          We'd love to hear from you! Fill out the form below and we'll get back
          to you soon.
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField label="Full Name" variant="outlined" fullWidth required />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Message"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
            required
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
export default Contactus;
