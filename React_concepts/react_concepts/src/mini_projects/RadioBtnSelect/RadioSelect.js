import React, { useState } from 'react'

 function RadioSelect() {
    const [activity, setActivity]=useState({game:null,
                                            day:null
                                            });

    const games = ["Chess", "Football", "Hockey"];
    const days=["Weekday", "Weekend"];

    const handleSelction=(type, value)=>{
        setActivity({
            ...activity,
            [type]:value
        })

    }

  return (
    <>
    <h2>Radio Select</h2>

    <h2>Select Game</h2>
    <form>
    {
        games.map((game, i)=>{
            return(
                    <>
                    <div key={game}>
                        <input  
                            type='radio' 
                            value={game} 
                            name="game" 
                            onClick={()=>handleSelction("game", game) }
                        />
                        <label htmlFor={game}>{game}</label>
                    </div>
                    </>
            )
        })
        
    }
    </form>
    <h2>Select Day</h2>
    {
        days.map((day,i)=>{
            return(
               <>
               <div key={day}>
                    <input 
                        type='radio' 
                        value={day} 
                        name="day" 
                        onClick={()=>handleSelction("day", day)}
                    />
                    <label>{day}</label>
               </div>
               </> 
            )
        })
    }{
        activity.day && activity.game && (
            <h2>I palay {activity.game} on {activity.day}</h2>
        )
    }
    </>
  )
}

export default RadioSelect;