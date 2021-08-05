import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";

const TechItem = ({ tech, deleteTech }) => {
  return (
    <li className='collection-item'>
      <div>
        <a href='#edit-tech-modal' className={`modal-trigger`}>
          {tech.firstName + " " + tech.lastName}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{tech.id} </span>
          <a
            href='#!'
            className='secondary-content'
            onClick={() => {
              deleteTech(tech.id);
            }}
          >
            <i className='material-icons grey-text'>delete</i>
          </a>
        </span>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
