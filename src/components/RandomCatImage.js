import React from 'react';
import { connect } from 'react-redux';
import { fetchRandomCatImage } from '../store/actions/catImageActions';

const RandomCatImage = ({ catImageData, fetchRandomCatImage }) => {
  return (
    <div>
      <h2>Random Cat Image</h2>
      <button onClick={fetchRandomCatImage}>Get Random Image</button>
      {catImageData.loading && <p>Loading...</p>}
      {catImageData.error && <p>Error: {catImageData.error}</p>}
      {catImageData.imageUrl && (
        <div>
          <img src={catImageData.imageUrl} alt="Random Cat" />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  catImageData: state.catImage, 
});

export default connect(mapStateToProps, { fetchRandomCatImage })(RandomCatImage);
