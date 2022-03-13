export const loadUser = async (userInput) => {
    try{
        const response = await fetch(`https://api.github.com/orgs/${userInput}`)
       const userData = await response.json();
       return await userData
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