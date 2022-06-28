import styles from './index.less';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import { useEffect } from 'react';

export default function IndexPage() {
  let code_verifier = '';
  let code_challenge = '';
  let code_challenge_base64 = '';
  let demo = '11111111';


  function generateRandomString(length: number) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return 'Zo0zk6GSoJYrcIpdTChQVmciduQpH41X';
  }

  /*  function generateCodeChallenge(code_verifier: string) {
      return sha256(code_verifier);
    }

   function base64URL(str: string) {
     return Base64.stringify(str);
   }*/
  function generateCodeChallenge(code_verifier: string) {
    return sha256(code_verifier);
  }

  function base64URL(str: string) {
    // @ts-ignore
    return str.toString(Base64).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  }

  useEffect(() => {
    code_verifier = generateRandomString(32);
    console.log(code_verifier);
    code_challenge = generateCodeChallenge(code_verifier);
    console.log(code_challenge);
    code_challenge_base64 = base64URL(code_challenge);
    console.log(code_challenge_base64);
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <p>code_verifier: {code_verifier}</p>
      <p>code_challenge: {code_challenge}</p>
      <p>code_challenge Base64: {code_challenge_base64}</p>
      <p>demo : {demo}</p>
    </div>
  );
}
