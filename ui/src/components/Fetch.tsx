import React, { useReducer,useState } from 'react';

const initialState = {
  error: null,
  greeting: null,
};

function greetingReducer(state: any, action: any) {
  switch (action.type) {
  case 'SUCCESS': {
    return {
      error: null,
      greeting: action.greeting,
    };
  }
  case 'ERROR': {
    return {
      error: action.error,
      greeting: null,
    };
  }
  default: {
    return state;
  }
  }
}

export default function Fetch({ url }: {url: string}) {
  const [{ error, greeting }, dispatch] = useReducer(
    greetingReducer,
    initialState,
  );
  const [buttonClicked, setButtonClicked] = useState(false);

  const fetchGreeting = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const { greeting } = data;
      dispatch({ type: 'SUCCESS', greeting });
      setButtonClicked(true);
    }
    catch(error) {
      dispatch({ type: 'ERROR', error });
    }
  };

  const buttonText = buttonClicked ? 'Ok' : 'Load Greeting';

  return (
    <div>
      <button onClick={() => fetchGreeting(url)} disabled={buttonClicked}>
        {buttonText}
      </button>
      {greeting && <h1>{greeting}</h1>}
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </div>
  );
}
