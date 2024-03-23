import React from 'react';
import Navbar from '../Navbar';
import { TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../../styles/findDoctor.css';

function FindDoctor() {
  // var movies = [
  //   {id: 101, name: "Fight Club", year: 1999, rating: 8.1, color: '#2196f3'},
  //   {id: 102, name: "Inception", year: 2010, rating: 8.7, color: '#2196f3'},
  //   {id: 103, name: "The Dark Knight", year: 2008, rating: 9, color: '#2196f3'},
  //   {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9, color: '#2196f3'}
  // ];

  return (
    <div className='doc-container'>
      <Navbar/>
      <div className="doc-image-view-container">
        <div className='doc-card-container'>
          <h2>FIND A DOCTOR</h2>
          <p className='textbox'>Search more than 1,000 care providers and schedule an in-person or virtual appointment.</p>
          <TextField 
            type='text' 
            label='Name or Speciality' 
            variant="standard"
            sx={{ input: { 
              color: 'black',
              fontFamily: 'PT Serif, serif' 
            }}}
            InputLabelProps={{style: {color: '#2196f3', fontFamily: 'PT Serif, serif'}}}
          />
          <TextField 
            type='text' 
            label='Address' 
            variant="standard" 
            sx={{ input: { 
              color: 'black',
              fontFamily: 'PT Serif, serif'
            }}}
            style={{ marginLeft: '25px' }}
            InputLabelProps={{style: {color: '#2196f3', fontFamily: 'PT Serif, serif'}}}
          />
          <Button 
            variant="contained" 
            startIcon={<SearchIcon />} 
            className='doc-search'
          >
            Search
          </Button>
        </div>
      </div>
      {/* <div className='doc-list'>
        {movies.map(movie => (
          <Card key={movie.id} className='movie-card'>
            <div className='color-bar' style={{ backgroundColor: 'red' }}></div>
            <div className='info-container'>
              <div>
                <strong>ID:</strong> {movie.id}
              </div>
              <div>
                <strong>Name:</strong> {movie.name}
              </div>
            </div>
          </Card>
        ))}
      </div> */}
    </div>
  )
}

export default FindDoctor
