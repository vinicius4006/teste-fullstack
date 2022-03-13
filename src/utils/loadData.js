export const loadUser = async (userInput) => {
    try{
        const response = await fetch(`https://api.github.com/orgs/${userInput}`)
       const [userData] = await Promise.all([response]);
       return await userData.json();
    }catch(err){
        console.log(err);
    }
}

export const loadRepo = async ({repos_url}) => {
    try{
        const response = await fetch(repos_url);
        return await response.json();
    } catch(err){
        console.log(err)
    }
}