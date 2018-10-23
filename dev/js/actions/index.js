export const selectUser = (user) => {
    console.log(user.firstname);

    return {
        type: 'USER_SELECTED',
        payload: user
    }
}