import { signIn, signOut, useSession } from 'next-auth/react';

const SignInButton = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <p>Welcome {session.user.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return <button onClick={() => signIn("google")}>Sign in with Google</button>;
  }
};
