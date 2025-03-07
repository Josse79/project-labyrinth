import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generateAction } from '../reducers/game'
import EndScreen from './EndScreen'
import { ChildContainer, MazeCardText } from './Styles'

const GameScreen = () => {
    const startDescription = useSelector(store => store.game.actions.description)
    
    const actions = useSelector(store => store.game.actions.actions)
    
    const dispatch = useDispatch()

    const onActionRegenerate = (type, direction) => {
        dispatch(generateAction(type, direction))
    }

    if (actions?.length === 0) {
        return (
            <EndScreen />
        )
    }


    return (
      <ChildContainer>
       <div class="nes-container is-dark with-title">
         <p class="title">The Maze</p>
         <p>{startDescription}</p>
              {actions?.map(action => (
            <MazeCardText>
                <p>{action.description}</p>
                    <button 
                        type="button" class="nes-btn is-success"
                        key={action.description} 
                        onClick={() => onActionRegenerate(action.type, action.direction)}>
                        {action.direction}
                    </button>
            </MazeCardText>
        ))}
      </div>
     </ChildContainer>
    )
}
export default GameScreen