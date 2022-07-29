// import { usePosts } from '@context/postContext';
// import { useRouter } from 'next/router';
// import toast from 'react-hot-toast';

export default function PostCard({ thought }) {
  // const router = useRouter();

  // const { deletePost } = usePosts();

  // const handleDelete = (postId) => {
  //   toast(
  //     (t) => (
  //       <div>
  //         <p className="text-white py-3">
  //           ¿Seguro que quieres borrar el <strong>thought {thoughtId}</strong> ?
  //         </p>

  //         <div className="flex items-center justify-between">
  //           <button
  //             className="bg-red-600 hover:bg-red-500  text-white px-3 py-2 rounded-sm mx-2"
  //             onClick={() => {
  //               deleteThought(thoughttId);
  //               toast.dismiss(t.id);
  //             }}
  //           >
  //             Borrar
  //           </button>

  //           <button
  //             className="bg-indigo-500 hover:bg-indigo-600  text-white px-3 py-2 rounded-sm mx-2"
  //             onClick={() => {
  //               toast.dismiss(t.id);
  //             }}
  //           >
  //             Cancelar
  //           </button>
  //         </div>
  //       </div>
  //     ),
  //     {
  //       style: {
  //         background: '#202020',
  //       },
  //     }
  //   );
  // };

  return (
    <>
      <div
        className="bg-primary w-full text-white rounded-sm shadow-md shadow-black hover:bg-secondary hover:cursor-pointer"
        // onClick={() => {
        //   router.push(`/posts/edit/${post.postId}`);
        // }}
      >
        <div className="px-4 py-7">
          <div className="flex justify-between">
            <h3>Me hace sentir {thought?.emotion.emotion}</h3>
            <button
              className="bg-red-600 hover:bg-red-500 text-sm px-2 py-1 rounded-sm"
              // onClick={(e) => {
              //   e.stopPropagation();
              //   handleDelete(post.postId);
              // }}
            >
              Borrar
            </button>
          </div>
          <p>{thought?.thought}</p>
        </div>

        {/* {post.image && <img src={post.image.url} className="w-full h-96 object-cover" alt={post.post} />} */}
      </div>
    </>
  );
}
