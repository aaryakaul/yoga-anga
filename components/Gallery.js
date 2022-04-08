import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Media } from '../lib/Media';
function Gallery() {
  return (
    <div>
      <div className='container'>
        <div className='heading'>
          <h1>Discover the spirit of yoga</h1>
          <p>
            Yoga is a science that has crossed centuries and continents for the
            well-being of all.
          </p>
        </div>
        <Media lessThan='myNavSize'>
          <Grid>
            <Grid.Row columns={1} padded verticalAlign='middle'>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryimage2.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/joteriichaho.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage69.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage70.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage71.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage72.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage73.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage74.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage76.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage77.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryimage12.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage75.jpeg' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Media>
        <Media between={['myNavSize', 'tablet']}>
          <Grid>
            <Grid.Row columns={2} padded verticalAlign='middle'>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryimage2.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/joteriichaho.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage69.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage70.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage71.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage72.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage73.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage74.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage76.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage77.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryimage12.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage75.jpeg' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Media>
        <Media greaterThanOrEqual='tablet'>
          <Grid>
            <Grid.Row columns={3} padded verticalAlign='middle'>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryimage2.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/joteriichaho.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage69.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage70.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage71.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage72.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage73.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage74.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage76.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage77.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryimage12.jpeg' />
              </Grid.Column>
              <Grid.Column style={{ padding: '15px' }}>
                <Image src='/galleryImage75.jpeg' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Media>
      </div>
    </div>
  );
}

export default Gallery;
