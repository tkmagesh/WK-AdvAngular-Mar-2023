const StateManager = (function(){
    let _currentState = undefined,
        _callbacks = [],
        _reducer = undefined,
        _init_action = { type : 'INIT_STORE' }
    
    function getState(){
        return _currentState;
    }

    function subscribe(callbackFn){
        _callbacks.push(callbackFn);
    }

    function _triggerChange(){
        _callbacks.forEach(fn => fn())
    }

    function dispatch(action){
        let _newState = _reducer(_currentState, action)
        if (_newState === _currentState) return;
        _currentState = _newState
        _triggerChange()
    }

    function createStore(reducer){
        if (typeof reducer !== 'function') 
            throw new Error('reducer is mandatory to create the store')
        _currentState = reducer(undefined, _init_action)
        const store = {
            getState, 
            subscribe,
            dispatch
        }
        return store;
    }

    return { createStore }

})()