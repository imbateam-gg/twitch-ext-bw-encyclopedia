import React from 'react';
import { Link } from 'react-router-dom';
const races = require('./bwapi-data/json/races.json');

const RaceItem = ({name, match}) => {
    const race = races.find(race => race.Name === name);

    return <div className='races-list-item'>
        <Link to={`/race/${name}`} style={{color:race.Color}} className='race action-item-start'>{ name }</Link>
    </div>;
}

const Races = (props) => {
    return <div className='races-container starcraft'>
        <h6 style={{textAlign:'center',padding:'1em 0 0 0', margin:'0'}}>Learn about </h6>
        <img style={{width:'100%'}} src="resources/StarcraftTitle.png" alt="Starcraft"/>
        {/* <h1 className="starcraft__title" style={{textAlign:'center', marginTop:'0'}}>StarCraft</h1> */}
        <p className='race-description'>A player can pick one of three unique Races with which to play: The Protoss, Zerg and Terran. All three races have their own qualities and weaknesses as well as units, abilities and gameplay mechanics.</p>
        {props.loading ? 
        
        <div>
            <div className='reload'></div>
        </div> :  
        
        
        <div className='races'>
                <RaceItem name="Terran" {...props} />
                <RaceItem name="Protoss" {...props}/>
                <RaceItem name="Zerg" {...props}/>
        </div>}

        <p style={{textAlign:'center', opacity:0.5, position:'relative', marginTop:'6rem', fontSize:'0.5rem'}}>Data in part thanks to BWAPI and Liquipedia</p>
        
        </div>
};

const Race = ({match}) => {

    const race = races.find(race => race.Name === match.params.race);
    
    const name = '', description = '', liquipedia = '';

    return <div className={`race ${race.Name}`}>
            <Link to="/"><img className='back-button' src='resources/backarrowwhite.svg' alt='Back'/></Link>
            <p className="race__title">{race.Name}</p>
            <div className='race__description'>
                <p>{race.Description}</p> 
                <p style={{textAlign:'center'}}><Link to={`/race/${race.Name}/units`} className='action-item action-item--negative'>See {race.Name} Units, Buildings, Abilities and Upgrades</Link></p>
            </div>
            
            {/* <p style={{textAlign:'center'}}>or</p>
            <p className="action-item" style={{textAlign:'center'}}><Link to={`/compare/${race.Name}`}>Compare Units</Link></p> */}
        </div>;
}

export {
    Race,
    Races
};