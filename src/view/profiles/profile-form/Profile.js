import React from 'react'
import Collapsible from '../../../components/collapsible/Collapsible';
import './Profile.css'

const Profile = () => {
    
    return (
      
        <div className='profile-wrapper'>
          <form className='profile-form'>
            <Collapsible
              title={"Personal Demographics"}
              content={
                <div className="content">
                  <h5> Add your info below:</h5>
                  <input type="text" className="name" placeholder='First and Last Name' /><br />
                  <br></br>
                  <input type="date" placeholder='birthday'/><br />
                  <br></br>
                  <h5>Gender: </h5>
                  <input type="radio" value="Male" />
                  <label htmlFor="male">Male</label><br />
                  <input type="radio" value="Female" />
                  <label htmlFor="female">Female</label><br />
                </div>
              }
            />
            <br></br>
            <Collapsible 
              title={"Surgeries"}
              content={
                <div className="content">
                        <h5> List all your surgeries including dates and any complications:</h5>
                        <textarea placeholder="Surgery" name="description" cols="40" rows="5"></textarea>
                        <br></br>
                        <input type="date" name="date" placeholder="Surgery date" />
                        <br></br>
                        <br></br>
                        <textarea placeholder="Surgical complications" name="complications" cols="40" rows="5"></textarea>
                
                    <div className="additional-surgery">
                      <Collapsible 
                        title={"Add another surgery"}
                        content={
                          <div className="content secondary-collapse">
                                  <h5> List all your surgeries including dates and any complications:</h5>
                                  <textarea placeholder="Surgery" name="description" cols="40" rows="5"></textarea>
                                  <br></br>
                                  <input type="date" name="date" placeholder="Surgery date" />
                                  <br></br>
                                  <br></br>
                                  <textarea placeholder="Surgical complications" name="complications" cols="40" rows="5"></textarea>
                          </div>
                        }
                      />
                    </div>
                    <br></br>
                    <div className="additional-surgery">
                      <Collapsible 
                        title={"Add another surgery"}
                        content={
                          <div className="content secondary-collapse">
                                  <h5> List all your surgeries including dates and any complications:</h5>
                                  <textarea placeholder="Surgery" name="description" cols="40" rows="5"></textarea>
                                  <br></br>
                                  <input type="date" name="date" placeholder="Surgery date" />
                                  <br></br>
                                  <br></br>
                                  <textarea placeholder="Surgical complications" name="complications" cols="40" rows="5"></textarea>
                          </div>
                        }
                      />
                    </div>
                    <br></br>
                    <div className="additional-surgery">
                      <Collapsible 
                        title={"Add another surgery"}
                        content={
                          <div className="content secondary-collapse">
                                  <h5> List all your surgeries including dates and any complications:</h5>
                                  <textarea placeholder="Surgery" name="description" cols="40" rows="5"></textarea>
                                  <br></br>
                                  <input type="date" name="date" placeholder="Surgery date" />
                                  <br></br>
                                  <br></br>
                                  <textarea placeholder="Surgical complications" name="complications" cols="40" rows="5"></textarea>
                          </div>
                        }
                      />
                    </div>
                </div>
              }
              
            />

            <br></br>

            <Collapsible 
              title={"Medications"}
              content={
                <div className="content">
                      <p> Do you take any recreational drugs?</p>
                      <input type="radio" name="yes" />
                      <label htmlFor="yes">Yes</label><br></br>
                      <input type="radio"name="no"/>
                      <label htmlFor="no">No</label>
                      <hr className='mid-med'/>
                      <p> Do you take any prescription medications?</p>
                      <input type="radio" name="yes"/>
                      <label htmlFor="yes">Yes</label><br></br>
                      <input type="radio" name="no"/>
                      <label htmlFor="no">No</label>
          
                      <p>If you said, yes, please continue. If you said no, skip to next section</p>
                      <div className='meds-section'>
                        <input type="text" name="medication" placeholder="Medication and dosage" className='med-input'/>
                        <input type="text" name="medication" placeholder="Medication and dosage" className='med-input'/>
                        <input type="text" name="medication" placeholder="Medication and dosage" className='med-input'/>
                        <input type="text" name="medication" placeholder="Medication and dosage" className='med-input'/>
                      </div>
                  </div>
              }
            />

            <br></br>

            <Collapsible 
                title={"Alcohol | Tobacco"}
                content={
                  <div className="content">
                    <p> Do you drink alcohol?</p>
                    <input type="radio" name="yes"/>
                    <label htmlFor="yes"> Yes</label><br />
                    <input type="radio" name="no"/>
                    <label htmlFor="yes"> No</label><br />
                    <p>If yes, how often?</p>
                    <input type="radio" name="once-a-week"/>
                    <label htmlFor="once a week">Once a week</label><br></br>
                    <input type="radio" name="two-to-four-times-a-week"/>
                    <label htmlFor="two to four times a week">Two - four times a week</label><br></br>
                    <input type="radio" name="every day"/>
                    <label htmlFor="every day">Every day</label><br></br>
                  </div>
                }
            />
            <br></br>
            <button type="submit">Submit</button>
         
        </form>

    </div>
  )
}

export default Profile
