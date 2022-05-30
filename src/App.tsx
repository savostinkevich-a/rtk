import React from 'react';
import './styles/App.css';
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";

function App() {



  return (
      <Layout>
          <Layout.Header>

          </Layout.Header>
          <Layout.Content>
              <div className="App">
                <Routes>
                    <Route element={<PostListPage/>} path={"/posts"}/>
                    <Route element={<PostDetailPage/>} path={"/posts/:id"}/>
                </Routes>
              </div>
          </Layout.Content>
          <Layout.Footer/>
      </Layout>

  );
}

export default App;
