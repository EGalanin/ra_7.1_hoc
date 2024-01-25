import PropTypes from 'prop-types';
import {DateTimePretty} from './DateTime';

const Video = ({url, date, id}) => {
  return (
    <div className="video">
      <iframe src={url} style={{border: 0, }} allow="autoplay; encrypted-media" allowFullScreen title={id}></iframe>
      <DateTimePretty date={date} />
    </div>
  );
};

Video.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Video;