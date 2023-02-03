import { useState, useEffect } from 'react';
import columnApi from 'services/Column';
import { Post } from '@type';
import Recommend from './components/Recommend';
import Posts from './components/Posts';

function Column() {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await columnApi.getAll();
      setPosts(res);
      setLoading(false);
    } catch (error) {
      // handle error
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="flex justify-center items-center py-14 gap-y-14">
      <div className="container">
        <Recommend />
        <Posts posts={posts} loading={loading} />
      </div>
    </div>
  );
}

export default Column;
