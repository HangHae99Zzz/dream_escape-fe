// import ReactGA from 'react-ga';
// import GAEvents from 'lib/GA';

const Category = {
  auth: "Auth",
  userProfile: "User Profile",
  gameProfile: "Game Profile",
  relation: "Relation",
  matching: "Matching",
  chat: "Chat",
  search: "Search",
};

const Action = {
  auth: {
    login: "Login", // login api submit
    signup: "Signup", // Signup button click
    guestSignup: "Guest Signup", // start with guest button click
    signupCloseModal: "Signup Close Modal", // close modal during sign up
  },
  userProfile: {
    profileEdit: "Profile Edit", // profile page edit profile click
    personalityEdit: "Personality Edit", //profile page edit personality click
    gamelistEdit: "Gamelist Edit", // profile page edit gamelist click
  },
  gameProfile: {
    gamelistDragDrop: "Gamelist Drag Drop", // game account modal drag and drop
    accountEnrollSelectGame: "Account Enroll Select Game",
    accountEnrollStart: "Account Enroll Start", // game account enroll button click
    accountEnrollEnd: "Account Enroll End", // close account enroll modal during process
    accountCertificationStart: "LOL Account Certification Start", // start lol certification
    accountCertificationEnd: "LOL Account Certification End", // stop lol certification during process
  },
  relation: {
    follow: "Follow", // follow button click
    block: "Block", // profile page block button click
    mannerEdit: "Manner Edit", // profile page manner edit button click
    report: "Report", // profile page block report click
  },
  search: {
    searchLinkClick: "Search Result Link Click",
  },
};

const Label = {
  maple: "maple",
  lol: "lol",
  pubg: "pubg",
  others: "others",
};

const GAEvents = {
  Category,
  Action,
  Label,
};

export default GAEvents;
