import { useRef } from 'react';
import { useAuth } from '@hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/solid';
import router from 'next/router';

export default function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { signIn } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    // form values when press to send
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    //could take form validations

    // context function
    (async () => {
      await signIn(email, password)
        .then(() => {
          console.log('Login success');
          router.push('/thoughts'); //! cambiar a dashboard
        })
        .catch((error) => {
          if (error.response?.status === 401) {
            alert('Usuario o contraseña incorrectos');
          }
        });
    })();
  };

  return (
    <>
      <div className="flex items-center justify-center" style=
        {{ minHeight: 65 + 'vh' }}
      >
        <div className="bg-white p-3 pt-0 w-full">

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Iniciar sesión</h2>

          <div className="drop-shadow-2xl">
            <form onSubmit={submitHandler}>

              <div className='px-4 pb-5 bg-white space-y-6 sm:pb-9'>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-secondary focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      ref={emailRef}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                      ref={passwordRef}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon className="h-5 w-5 text-primary group-hover:text-tertiary" aria-hidden="true" />
                    </span>
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}


{/* <div className="flex items-center justify-between"> */ }
{/* remember me & forgot password */ }
{/* <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div> */}

{/* <div className="text-sm">
                <Link href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div> */}
{/* </div> */ }