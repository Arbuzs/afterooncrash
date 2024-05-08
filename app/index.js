import { Redirect } from 'expo-router';

import User from './model/user';
import Program from './model/program';

const generateRandomDays = true;
const startDate = new Date(2024, 3, 29); //YYYY, M, D - Month is with index 0, so 0 is January

//Now use screens/{name_of_screen}
const Home = () => {

    //------------ TEST USER ------------
    const id = 12;
    const name = 'TestUser';
    const email = 'a@b.c';
    const password = 123;
    signUp(id, name, email, password)
    //-----------------------------------

    return <Redirect href="/screens/summary" />;
}

function signUp(id, name, email, password) {
    var user = new User(id, name, email, password)
    var program = Program.getInstance()
    program.setCurrentUser(user, generate=generateRandomDays, startDate);
}

export default Home;