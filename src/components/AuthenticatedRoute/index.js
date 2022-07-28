import { useRouter } from 'next/router';
import { useAuth } from '@hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth()



  if (!user) { router.push('/login') }

  // useEffect(() => {

  //   // onAuthStateChanged((user) => {
  //   //   if (!user) {
  //   //     router.push('/login');
  //   //   }
  //   // });
  // }, []);

  return <>{children}</>;
};

export default PrivateRoute;
