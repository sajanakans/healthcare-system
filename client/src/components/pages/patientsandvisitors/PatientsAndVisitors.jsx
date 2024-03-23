import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AddIcon from '@mui/icons-material/Add';
import '../../../styles/patientsAndVisitors.css'

export default function PatientAndVisitors() {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    const importCardImage = async () => {
      const Card1 = await import('../../../assets/images/card-img.jpg');
      const Card2 = await import('../../../assets/images/card-img2.jpg');
      const Card3 = await import('../../../assets/images/card-img3.jpg');
      const Card4 = await import('../../../assets/images/card-img4.jpg');
      const Card5 = await import('../../../assets/images/card-img5.jpg');
      const Card6 = await import('../../../assets/images/card-img6.jpg');

      setItemData([
        {
          img: Card1.default,
          title: 'Medical Records',
          rows: 2,
          cols: 2,
          featured: true,
          firstPath: '/patients-visitors/add-medical-records',
          secondPath: '/patients-visitors/medical-records',
        },
        {
          img: Card2.default,
          title: 'Patient Confidentiality',
          firstPath: '',
          secondPath: '',
        },
        {
          img: Card3.default,
          title: 'Your Healthcare Costs',
          firstPath: '',
          secondPath: '',
        },
        {
          img: Card4.default,
          title: 'Patient Rights',
          cols: 2,
          firstPath: '',
          secondPath: '',
        },
        {
          img: Card5.default,
          title: 'Paying For Your Health Care',
          cols: 2,
          firstPath: '',
          secondPath: '',
        },
        {
          img: Card6.default,
          title: 'Financial Assistance',
          rows: 2,
          cols: 2,
          featured: true,
          firstPath: '',
          secondPath: '',
        },
      ]);
    };

    importCardImage();
  }, []);

  return (
    <div className='patient-container'>
      <Navbar/>
      <div className="image-view-container">
        <div className='card-container'>
          <h2>PATIENTS & VISITORS</h2>
          <p className='para'>At Ezmo Dental Aesthetic Clinic, protecting your privacy and maintaining confidentiality is central to our mission. Our providers are dedicated to providing you and your family with the best care, regardless of immigration status or ability to pay.</p>
          <p className='para'>On this page you will find important information about your rights as a patient as well as our responsibilities to you as your medical provider. You will also find resources on how to access your medical records, obtain language services, and how to pay for care.</p>
        </div>
      </div>
      <ImageList className="image-list">
        {itemData.map((item) => (
          <ImageListItem key={item.img} className="image-list-item">
            <img
              srcSet={`${item.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=500&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <>
                  <Link
                    to={item.firstPath}
                    className="image-list-item-link"
                    aria-label={`Navigate to first path for ${item.title}`}
                  >
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)', marginRight: '-10px' }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Link>
                  <Link
                    to={item.secondPath}
                    className="image-list-item-link"
                    aria-label={`Navigate to second path for ${item.title}`}
                  >
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)', marginRight: '10px' }}
                    >
                      <KeyboardDoubleArrowRightIcon />
                    </IconButton>
                  </Link>
                </>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}