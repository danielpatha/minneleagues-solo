import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { useDispatch, useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import LeagueForm from '../LeagueForm/LeagueForm';

function LandingPage() {
  //ORIGINAL
  //const [heading, setHeading] = useState('Find a League Near You ');
  const leagueStore = useSelector(store => store.landingPageReducer)
  
  const history = useHistory();
  const dispatch = useDispatch();

  // const onLogin = (event) => {
  //   history.push('/login');
  // };

  useEffect(() => {
    dispatch({ type: 'FETCH_NEW_LEAGUE' });
}, []);

//send dispatch stating id and set movie
function  getLeague(league){
  console.log("clicked", league.id)
  // dispatch({
  //     type: 'SET_LEAGUE',
  //     payload: {
  //         league
  //     }
  // })
  history.push(`/league/${league.id}`)
}


  return (
    <div className="container">

      <div className = "headerForm"> 
      <h2 className = "header2">Find a Local League</h2>
         <LeagueForm/>
         </div> 




    <h2 className = "header2">Newly Added Leagues</h2>

    <section className='grid-container'>
        
        {leagueStore.map(league => {
            return(
                <div className = 'grid-item' key = {league.id}>
                  <h4> {league.league_city_name} </h4>
                  
                  <p>SPORT:       {league.sport}</p> 
                  
                  <p> COMPETITIVE LEVEL:   {league.competitive_level}</p>
                  
                  <p>DAY:    {league.day_of_the_week}</p>

                  <img src={league.photo} />
                  <br></br>
                  <button className = "moreInfo" onClick={() => getLeague(league)}> click to learn more!</button>         
                  </div> 
            )

        })}
        

      </section>
   
      
        
          {/* Original Stuff */}
          {/* <RegisterForm /> */}
            
          {/* <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center> */}
        </div>
    
    
  );
}

export default LandingPage;
