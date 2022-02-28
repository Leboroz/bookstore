import PropTypes from 'prop-types';

const Spinner = ({ progress }) => {
  const degree = (progress * 360) / 100;
  const dark = '#f76e11';
  const light = '#fa9f62';

  const activeBorder = {
    position: 'relative',
    textAlign: 'center',
    width: '90px',
    height: '90px',
    borderRadius: '100%',
    backgroundColor: dark,
    backgroundImage: `linear-gradient(${
      progress > 50 ? '90' : degree + 90
    }deg, transparent 50%, ${
      progress > 50 ? dark : light
    } 50%), linear-gradient(${
      progress > 50 ? degree - 90 : '90'
    }deg, #fa9f62 50%, transparent 50%)`,
  };

  const circle = {
    position: 'relative',
    top: '5px',
    left: '5px',
    textAlign: 'center',
    width: '80px',
    height: '80px',
    borderRadius: '100%',
    backgroundColor: '#fff',
  };

  return (
    <div style={activeBorder}>
      <div style={circle} />
    </div>
  );
};

Spinner.defaultProps = {
  progress: 0,
};

Spinner.propTypes = {
  progress: PropTypes.number,
};

export default Spinner;
