import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch(action.type){
    case 'INCREMENT': return { count: state.count + 1, showText: state.showText}
    case 'toggleShowText': return { count: state.count, showText: !state.showText}
    default: return state
  }
}

const M11H02 = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})
  return (
    <div>
      <h1>M11H02: Hooks: useReducer</h1>
      <h2>{state.count}</h2>
      <button onClick={() => { 
                                dispatch({ type: 'INCREMENT'});
                                dispatch({ type: 'toggleShowText'});
                              }}>Click Here</button>

                              {state.showText && <p>This is a showText</p>}
                              
    </div>
  )
}

export default M11H02
