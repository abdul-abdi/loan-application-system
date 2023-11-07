import { Canister, nat64, Opt, query, Record, StableBTreeMap, text, update, Void } from 'azle';
import {v4 as uuidv4} from 'uuid';
//defining the application that will be filled:
const application = Record({
    amount: nat64,
    duration: nat64,
});
//structure of the application to be stored
const applicationDetails = Record({
    id:text,
    amount: nat64,
    duration: nat64,
    createdAt: nat64,
    updatedAt: Opt(nat64)
});
//defining the stableBTreeMap
const storage = StableBTreeMap(text, applicationDetails, 0);

export default Canister({
    //function to check the interest that will be accrued
    
    //function to apply for the loan

    //function to check all existing applications

    //function to check a specific existing application

    //function to delete an application

});

globalThis.crypto = {
    // @ts-ignore
    getRandomValues: () => {
        let array = new Uint8Array(32);

        for (let i = 0; i < array.length; i++) {
            array[i] = Math.floor(Math.random() * 256);
        }

        return array;
    }
};

