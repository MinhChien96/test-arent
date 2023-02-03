import { Post as IPost } from '@type';

type Props = {
  post: IPost;
};

function Post({ post }: Props) {
  const { title, date, image, tags } = post;
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-no-repeat bg-cover relative w-full pt-[65%]"
      >
        <div className="absolute bottom-0 left-0 bg-primary-300 text-light font-inter">
          <span className="px-2 py-1 text-[15px]">{date}</span>
        </div>
      </div>
      <div className="text-[15px] text-dark-500 line-clamp-2">{title}</div>
      <div>
        {tags?.map((tag) => (
          <span key={tag} className="text-xs text-primary-400 pr-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Post;
