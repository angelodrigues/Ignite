import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
    const isUserLoggedIn = false;


    return isUserLoggedIn ? (
        <button 
            type="button"
            className={styles.signInButton}
        >
            <FaFacebook color='#04d361'/>
            Angelo Barcelos
            <FiX color='#737380' className={styles.clseIcon} />
        </button>
    ) : (
        <button 
            type="button"
            className={styles.signInButton}
        >
            <FaFacebook color='#eba417'/>
            Sign in with facebook
        </button>
    );
}