import { useEffect, useState, useReducer }  from 'react';

function dataFetchReducer(state: any, action: any) {
    switch(action.type) {
        case 'FETCH_START':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                data: action.data,
                loading: false
            }
        case 'FETCH_FAILED':
            return {
                ...state,
                data: null,
                loading: false,
                error: action.error
            }
        default:
            break;
    }
}

export const RequestApi = () => {
    //const [fetchedData, setFetchedData] = useState<string | null>(null);
    //const [error, setError] = useState<Error | null>(null);
    const [movie, setMovie] = useState('girls');
    //const [isLoading, setIsLoading] = useState(true);
    const [state, dispatch] = useReducer(
        dataFetchReducer,
        {
            data: null,
            error: null,
            loading: true
        }
    )


    useEffect(() => {
        const myFetch = async () => {
            dispatch({type: 'FETCH_START'});

            try
            {
                const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${movie}`);
                const responseParsed = await response.json();

                dispatch({type:'FETCH_SUCCESS', data: responseParsed});
            }
            catch (error)
            {
                dispatch({type:'FETCH_FAILED', error: error});
            }
        }

        myFetch();

    }, [movie]);

    if(state.loading){
        return <p>Loading...</p>
    }
    if(state.error){
        return <p>ERROR!</p>
    }
    return (
        <div className = 'RequestApi'>
            <button onClick={() => setMovie('batman')}>Click me!</button>
            Hello!
        </div>
    );
}




