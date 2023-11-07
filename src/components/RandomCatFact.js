import React from 'react';
import { connect } from 'react-redux';
import { fetchRandomFact } from '../store/actions/factActions';

const RandomCatFact = ({ factData, fetchRandomFact }) => {
  return (
    <div>
      <h2>Random Cat Fact</h2>
      <button onClick={fetchRandomFact}>Get Random Fact</button>
      {factData.loading && <p>Loading...</p>}
      {factData.error && <p>Error: {factData.error}</p>}
      {factData.fact && !factData.loading && <p>{factData.fact}</p>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  factData: state.factData, 
});

export default connect(mapStateToProps, { fetchRandomFact })(RandomCatFact);
