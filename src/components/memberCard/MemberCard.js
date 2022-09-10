import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Member.css'
import { MemberCardWrapper} from './memberStyles';


const MemberCard = () => {

  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = () => {
    axios
      .get(`https://api-help-me.herokuapp.com/api/household/`)
      .then((res) => {
        console.log('We found your members:', res)
        setMembers(res.data);
        console.log('res.data:', res.data)
      })
      .catch((err) => {
        console.log('failed to get members:', err);
      });
};
  return (
 
    <div className='container'>
          {members.map((member, key) => (
            <MemberCardWrapper
              key={member.id}>
              <h3>{member.name}</h3>
            
            <img src={member.path} 
              className="avatar" 
              alt="family member avatar" 
              width= "105px"
              />
            
    
              {(console.log('path:', member.path))}
              <div className='icons'>
              {member.locations.map((loc) => (
                <div key={loc.id} className="location"> 
                  <img src={loc.image}
                  className="avatar" 
                  alt="family member avatar" 
                  width= "35px"
                  />
                </div>
              ))}
              </div>
              </MemberCardWrapper>
          ))}
          </div>
        );
      };
      export default MemberCard;
  