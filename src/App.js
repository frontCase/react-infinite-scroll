import React from 'react'
import { InfinitScroll } from './components/infiniteScroll/view/InfinitScroll';
import { ListControllerUsers } from './components/list/controller/ListControllerUsers';
import { PostsController } from './components/posts/controller/PostsController';
import { UserController } from './components/user/controller/UserController';

const App = () => {

  return (
    <div className="App">
      <InfinitScroll />
    </div>
  );
}

export default App;