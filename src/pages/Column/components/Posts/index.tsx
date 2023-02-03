import { Post as IPost } from '@type';
import Spinner from 'components/Spinner';
import Post from './Post';

type Props = {
  loading: boolean;
  posts: Array<IPost>;
};

function Posts({ loading, posts }: Props) {
  if (loading)
    return (
      <div className="flex justify-center items-center py-40">
        <Spinner />
      </div>
    );

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-4 mt-14">
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-8 flex justify-center w-full">
        <button
          className="text-lg text-light py-4 px-14 bg-primary-300/400 rounded-md"
          type="button"
        >
          コラムをもっと見る
        </button>
      </div>
    </>
  );
}

export default Posts;
