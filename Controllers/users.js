import { v4 as uuidv4 } from 'uuid';

const users = [ ];

//Get all users
export const usersList = (req, res) => {
    res.send(['Get all the users', users]);
};


//New user
export const newUser = (req, res) =>{
    const user = req.body;

    users.push({ ...user, id:uuidv4() });

    res.send(`User with the firstname ${user.firstname} added to the database`);
};

//Single user
export const singleUser = (req, res) => {
    const { id } = req.params;

    const findUser = users.find((user) => user.id == id);

    res.send(findUser);
};

//Update User
export const updateUser = (req,res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;

    const user = users.find((user => user.id == id));

    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age;

    res.send(`user with id ${id} has been UPDATED sucessfully`);

}; 


//Update User
export const deleteUser = (req,res) => {
    const { id } = req.params;
    
    const user = users.filter((user => user.id != id));

    res.send(`user with id ${id} has been DELETED sucessfully`);

};