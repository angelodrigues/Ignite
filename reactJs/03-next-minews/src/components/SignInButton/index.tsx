import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';

import styles from './styles.module.scss';


export function SignInButton() {
    const {data: session} = useSession();

    console.log(session)

    return session ? (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            <FaFacebook color='#04d361'/>
            { session.user.name }
            <FiX color='#737380' className={styles.clseIcon} />
        </button>
    ) : (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaFacebook color='#eba417'/>
            Sign in with facebook
        </button>
    );
}