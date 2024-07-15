# Recipes App
A mobile application with basic functionalities of SignUp, Explore recipies, Add bookmark to recipe, Profile view, notification view.
User can also explore few features of application as a guest without signin.

# How to run?
- Clone repository and do yarn install or npm install.
- Start metro server using yarn start.
- Run application by firing command npx react-native run-android.
- Once app started you can see main screen with Signup and Start cooking buttons.
- Do Sign up by clicking SignUp button or click on Strt cooking button to explore application as a guest.

# Formik
- In Signup screen Formik is used to validate form inputs and prevent user to do unauthenticate signup.

# Navigation
- Manage navigation flow by declaring two different routs in navigation/index.tsx file.

# contextApi
- context api is used for managing user's state for logged in or guest and Authentication flow will be work on it.

# themeing
- Implemented theming of application for dark and light mode.

# structure
- To manage application structre all featues wise folder and component folders are seperated also any shared elliment like @font, @components, @theme, @constants will be separated in shared folder.

# assets
- Assets floder will be having all assets like fonts, images, image constants.

# localization
- Localization is implemented.

# useQuery and Axios
- For api calling and managing requests useQuery is used along with Axios by creating custom hook useApi in hooks folder. 

# redux-toolkit
- Use redux toolkit for managing states of bookmark items. In redux folder there is store and slice is created.

# Test Cases
- Implemented basic test cases for few components like Button, Signup, TabSwitcher.

# Future enhancement
- Can integrate saga as middleware along with redux.
- Jest implement automation testing for major components.

