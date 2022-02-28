import { func, number } from 'prop-types';
import { useState } from 'react';
import styles from '../sass/components/add-input.module.scss';

const ProgressForm = ({
  total, currentProgress, setClose, submitHandler,
}) => {
  const [title, setTitle] = useState('');

  const style = {
    padding: '1rem 0.75rem 3rem 0.75rem',
    position: 'absolute',
    top: '-5px',
    left: '0',
    transform: 'translateY(-100%)',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '2px 5px 10px rgb(0 0 0 / 0.4)',
  };

  const formInput = {
    padding: '0.5rem 0.6rem',
  };

  return (
    <div style={style}>
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}
        onSubmit={submitHandler}
      >
        <button
          type="button"
          style={{
            alignSelf: 'flex-end',
            color: 'rgb(0 0 0 / 0.6)',
            cursor: 'default',
          }}
          onClick={() => setClose(true)}
        >
          X
        </button>
        <label htmlFor="total">
          <input
            id="total"
            type="number"
            placeholder="Total of chapters"
            style={formInput}
            onChange={(e) => total(e.target.value)}
            required
          />
        </label>

        <label htmlFor="current">
          <input
            id="curent"
            type="number"
            placeholder="Current chapter"
            style={formInput}
            onChange={(e) => currentProgress(e.target.value)}
            required
          />
        </label>

        <label htmlFor="name">
          <input
            id="name"
            type="text"
            value={title}
            placeholder="Title (optional)"
            style={formInput}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <button className={styles.btn} type="submit">
          SAVE
        </button>
      </form>
    </div>
  );
};

ProgressForm.propTypes = {
  total: number.isRequired,
  currentProgress: number.isRequired,
  setClose: func.isRequired,
  submitHandler: func.isRequired,
};

export default ProgressForm;
