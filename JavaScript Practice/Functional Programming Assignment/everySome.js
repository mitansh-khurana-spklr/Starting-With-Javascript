// Return a function that takes a list of valid users, and returns a function that returns 
// true if all of the supplied users exist in the original list of users.

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every((submittedUser) => {
            return goodUsers.some((goodUser) => {
                 return goodUser.id === submittedUser.id;
             })
        })
    };
  }

const goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ]

  var testAllValid = checkUsersValid(goodUsers)

  console.log(testAllValid([
    { id: 2 },
    { id: 1 }
  ])  )

