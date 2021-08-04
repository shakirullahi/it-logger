import React, { useState, useEffect } from "react";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    getTechs();
    //esling-disable-next-line
  }, []);

  const getTechs = async () => {
    const res = await fetch("/techs");
    const data = await res.json();
    setTechs(data);
  };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <ul className='collection with-header'>
          <li className='collection-header'>
            <h4 className='center'>Tech List</h4>
          </li>
          {techs.length === 0 ? (
            <p className='center'>No techs...</p>
          ) : (
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)
          )}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
