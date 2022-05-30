import React from 'react';
import './styles/App.css';
import {useGetPostsQuery} from "./services/PostService";
import {useAppSelector} from "./hooks/useAppSelector";

function App() {

  const {data, error, isLoading} = useGetPostsQuery(null)

  const post = useAppSelector(state => state.postApi)

  console.log(post)

  return (
    <div className="App">

    </div>
  );
}

export default App;
