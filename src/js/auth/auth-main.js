import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions"
import { firebaseConfig } from "../firebase/firebase-config";
import { showUserInfo } from '../account/show-user';
import { showAllUsers } from '../account/show-all-users';
import { setupMessages } from '../account/setup-messages';
import { deleteMessage } from '../account/delete-message';
import { setupAuthMenu } from './auth-menu';
import { setupAccountMenu } from './account-menu';
import { makeAdmin } from './make-admin';
import { registerUser } from './register-user';
import { logoutUser } from './logout';
import { loginUser } from './login-user';
import { sendMessage } from '../contact/send-message';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();

auth.onAuthStateChanged(user => {
    if (user) {
        user.getIdTokenResult().then(idTokenResult => {
            user.admin = idTokenResult.claims.admin;
            if(document.title === 'LevelUp - Account') {
                setupAccountMenu(user);
            };
        });
        setupAuthMenu(user);
        if(document.title === 'LevelUp - Account') {
            db.collection('users').doc(user.uid).get().then(doc => {
                user.name = doc.data().name;
                showUserInfo(user);   
            });
            db.collection('users').orderBy("timestamp", "desc").get().then(doc => {
                showAllUsers(doc);   
            });
            db.collection('messages').orderBy("timestamp", "desc").onSnapshot(snapshot => {
                setupMessages(snapshot.docs);
            }, err => console.log(err.message));  
        };
    } else {
        setupAuthMenu(user);
        if(document.title === 'LevelUp - Account') {
            setupAccountMenu(user);
            showUserInfo(user);
        };
    };
});

switch (document.title) {
    case 'LevelUp - Contact':
        sendMessage(db, firebase);
        registerUser(auth, db, firebase);
        logoutUser(auth);
        loginUser(auth);    
    break;
    case 'LevelUp - Account':
        makeAdmin(functions);
        deleteMessage(db);
        logoutUser(auth);
    break;
    default:
        registerUser(auth, db, firebase);
        logoutUser(auth);
        loginUser(auth);
    break;
};