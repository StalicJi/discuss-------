import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import { Divider } from "@nextui-org/react";
import PostList from "@/components/posts/post-list";
import { fetchTopPosts } from "@/db/queries/posts";
import { Suspense } from "react";
import PostShowLoading from "@/components/posts/post-show-loading";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 ">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Post</h1>
        <Suspense fallback={<PostShowLoading />}>
          <PostList fetchData={fetchTopPosts} />
        </Suspense>
      </div>
      <div className="border shadow py-3 px-2">
        <Suspense fallback={<PostShowLoading />}>
          <TopicCreateForm />
        </Suspense>
        <Divider className="my-2" />
        <h3 className="text-lg mb-2">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
