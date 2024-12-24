import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Avatar, Button } from '@mui/material';

const IncidentUI = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f9f9f9' }}>
      {/* Location and Description */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Location
            </Typography>
            <Typography variant="body1">Tulare County, Los Angeles, CA 23415</Typography>

            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
              Approx. Cost
            </Typography>
            <Typography variant="body1">$60,607,456.00</Typography>

            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
              Description
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat lorem a 
              pulvinar accumsan. Proin bibendum euismod purus, id malesuada nisl vehicula ut.
            </Typography>
          </Box>
        </Grid>

        {/* Image Placeholder */}
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Incident Map
            </Typography>
            <Box
              sx={{
                border: '1px solid #ddd',
                borderRadius: 2,
                overflow: 'hidden',
                height: 200,
                backgroundColor: '#eaeaea',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardMedia
                component="img"
                image="https://via.placeholder.com/300x200"
                alt="Map Placeholder"
                sx={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Locations */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Locations
        </Typography>
        <Grid container spacing={2}>
          {[1, 2, 3].map((location, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150"
                  alt="Location Image"
                />
                <CardContent>
                  <Typography variant="body1">Whitechapel Rd, CA</Typography>
                  <Typography variant="body2">$1,456,456.00</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Avatar */}
      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Avatar
          src="https://via.placeholder.com/80"
          alt="User Avatar"
          sx={{ width: 80, height: 80, margin: '0 auto' }}
        />
      </Box>

      {/* Activities */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Activities
        </Typography>
        {[1, 2].map((activity, index) => (
          <Box
            key={index}
            sx={{
              border: '1px solid #ddd',
              borderRadius: 2,
              padding: 2,
              marginBottom: 2,
              backgroundColor: '#fff',
            }}
          >
            <Typography variant="body1">Activity Name</Typography>
            <Typography variant="body2">$1,456,456.00</Typography>
          </Box>
        ))}
      </Box>

      {/* Documents */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Documents
        </Typography>
        {[1, 2].map((document, index) => (
          <Box
            key={index}
            sx={{
              border: '1px solid #ddd',
              borderRadius: 2,
              padding: 2,
              marginBottom: 2,
              backgroundColor: '#fff',
            }}
          >
            <Typography variant="body1">Document Name</Typography>
            <Typography variant="body2">$1,456,456.00</Typography>
          </Box>
        ))}
      </Box>

      {/* Button */}
      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default IncidentUI;
